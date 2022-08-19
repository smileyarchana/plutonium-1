const author=require("../models/authorModel")

const authorCreate=async function(req,res) {
    let data= req.body
    let ins=new author(data)
    let result=await ins.save()
    res.send(result)
}

module.exports.authorCreate=authorCreate