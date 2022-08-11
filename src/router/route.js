const express=require("express")
const router= express.Router();



let persons = [
    {
       name: "PK",
       age: 10,
       votingstatus: false
    },
    {
       name: "Sk",
       age: 20,
       votingstatus: false
    },
    {
       name: "AA",
       age: 70,
       votingstatus: false
    },
    {
       name: "SC",
       age: 5,
       votingstatus: false
    },
    {
       name: "HQ",
       age: 40,
       votingstatus: false
    }
 ]
 router.post("/persons", function (req, res) {
 
    let votingAge = req.query.votingAge
   
    let result = []
    let flag = false
    var id
    for (let i = 0; i < persons.length; i++) {
       id = persons[i]
       if (id.age >= 18 && votingAge >= 18) {
          id.votingstatus = true
          result.push(id)
       } 
    }
    return res.send({ status: true, data: result })
 })
 
 
 module.exports = router;