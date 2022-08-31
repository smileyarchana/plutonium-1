const jwt = require("jsonwebtoken");
const userModel=require("../models/userModel")
const mongoose=require('mongoose')

const authentication =async function (req, res, next) {
    try {
    let userName= req.body.emailId;
    let user = await userModel.findOne({emailId : userName})
    let token= jwt.sign(
        {
            userId: user._id.toString(),
            batch: "Plutonium",
            organisation: "FunctionUp",
        },
        "functionup-Plutonium-key"
    );
    res.setHeader("x-auth-token", token);
    res.status(201).send({status: true, data: token });
        next()
}
 catch(err){ return res.status(500).send(err)}
}
//**************************authorise************************
const authorise =async function (req, res, next) {
    try {
    let token= req.headers["x-Auth-token"];
    if(!token) token = req.headers ["x-auth-token"];
    if(!token) return res.status (401).send( {status: false, msg: "token must be present"});

    let decodedToken=jwt.verify(token, "functionup-Plutonium-key", (err, decode) =>{ 
        if(err) {
            return res.send("you have entered incorrect token or, incorrect length of token")
        }(decode == true)
        next()

    });
}
catch(err) {return res.status(500).send({msg:"server issue"})}
}


const authorise2 =async function (req, res, next) {
    try {
    let token= req.headers["x-Auth-token"];
    if(!token) token = req.headers ["x-auth-token"];
    if(!token) return res.send( {status: false, msg: "token must be present"});

    let decodedToken=jwt.verify(token, "functionup-Plutonium-key")
    let userLoggedIn = decodedToken.uderId
    let userToBeModified = req.params.userId
    
    let isValid=mongoose.Types.ObjectId.isValid(userToBeModified)

    if(isValid === false) {
        return res.send( "length of the id is less the 24 digit")
    }
    else if(!decodedToken) {
        return res.send( {status: false, msg: "token is invqalid"}) ;
    }
    else if( userToBeModified != userLoggedIn) {
        return res.send( {status:false, msg: 'user logger is not allowed to modify the requested users data'})
    } else {
        next()
    }
}
catch(err) {return res.status(500).send({msg:"server issue"})}
    }



module.exports.authentication=authentication
module.exports.authorise=authorise
module.exports.authorise2=authorise2