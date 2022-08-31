const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

// ************************** CREATE USER *********************************

const createUser = async function (req, res) {
try {
  let data = req.body;
  let savedData = await userModel.create(data);
  console.log(req.newAtribute);
  res.status(200).send({ msg: savedData });
}
catch(err) {return res.status(500).send({msg:"server issue"})}
};


// ************************** LOGIN USER *********************************

const loginUser = async function (req, res, next) {
  try {
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user) {
    return res.status(404).send({ status: false, msg: "username or the password is not correct" });
  } else if (user.isDeleted === true) {
    res.status(200).send("This account is deleted you can't login, please create new acount ")
  } else {
    next()
  }
}
catch(err) {return res.status(500).send({msg:"server issue"})}
  }



// ************************** getUserData *********************************

const getUserData = async function (req, res) {
try {
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails) {
    return res.status(404).send({ status: false, msg: "No such user exists" });
  } else if (userDetails.isDeleted == true) {
    res.send("This user is delete from our database you can't find" )
  } else {
  res.status(400).send({ status: true, data: userDetails });
  }
}
catch(err) {return res.status(500).send({msg:"server issue"})}
};


 // ************************** postMessage *********************************

 const postMessage = async function (req, res) {
  try {
  let message = req.body.message;
  let user = await userModel.findById(req.params.userId)
  if (!user) {
    return res.status(404).send({ status: false, msg: 'No such user exists' });
  } else if (user.isDeleted == true) {
    res.send("This user is deleted from our database you can't post message" )
  } else {
    let updatePosts=user.posts
    updatePosts.push(message)
    let updatedUser=await userModel.findOneAndUpdate({_id: user._id}, {posts: updatePosts}, {new: true}) 
  return res.status(200).send({ status: true, data: updatedUser })
  }
}
catch(err) {return res.status(500).send({msg:"server issue"})}
}


// ************************** updateUser *********************************

const updateUser = async function (req, res) {
  try {
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.status(404).send("No such user exists");
  } else if(user.isDeleted === true ){
    res.status(402).send("You can't update this user, this user is deleted from database")
  } else {

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, { new: true });
  res.status(404).send({ status: updatedUser, data: updatedUser });
  }
}
catch(err) {return res.status(500).send({msg:"server issue"})}
};



// ************************** deleteUser *********************************


const deleteUser = async function (req, res) {
  try {
  let userId = req.params.userId
  let user = await userModel.findById(userId);
  if (!user) {
    return res.send( "No such user exists" )
  } else if (user.isDeleted==true){
    res.status(200).send("This account is allready deleted, please create new account to delete")
  } else {
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, { isDeleted: true }, { new: true })
  res.status(400).send({ status: true,dl: "user deleted successfull", data: updatedUser });
  }
}
catch(err) {return res.status(500).send({msg:"server issue"})}
};


module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.postMessage = postMessage
module.exports.deleteUser = deleteUser
