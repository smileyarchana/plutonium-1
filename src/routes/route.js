const express = require('express');
const router = express.Router();
const authorModel= require("../controllers/authorContraller")
// const author=require("../author/con")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/authorCreate", authorModel.authorCreate )

// router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook  )

const author=require("../models/authorModel")
router.get("/getauthor", async function(req,res){
    let data =await author.find()
    res.send(data)
})

router.get("/getBooksByChetanBhagat", BookController.getBooksByChetanBhagat)

router.post("/authorOfBook", BookController.authorOfBook)
router.post("/getBooksByAuthorId", BookController.getBooksByAuthorId)
router.post("/getAuthorByAge", BookController.getAuthorByAge)

module.exports = router;