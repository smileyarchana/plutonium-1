const express = require('express');
// const abc = require('../introduction/intro')
const lodash = require("lodash")
const router = express.Router();


//////////////////////////////First Program/////////////////////////////////////////
router.get('/get-movies', function (req, res) { // 
    let movies1 = ["Don ", "Rang de basanti", "dil mange more", "dilwale"]//
    res.send(movies1)//
})

//////////////////////////////Second Program/////////////////////////////////////////
router.get('/get-movie/:indexNumber', function (req, res) {

    let movies = ['rang de basanti', 'The shining', 'Lord of the rings', 'batman begins']
    let index = req.params.indexNumber;
    console.log(movies[index])
    res.send(movies[index])
})

//////////////////////////////Third Program/////////////////////////////////////////
router.get('/get-moviess/:indexNumber', function (req, res) {

    let moviesName = ['rang de basanti', 'The shining', 'Lord of the rings', 'batman begins']
    let index = req.params.indexNumber;

    if (index > moviesName.length) {
        return res.send("use a valid index  ")
    } else {

        res.send(moviesName[index])
    }
})

//////////////////////////////Fourth Program/////////////////////////////////////////
router.get('/get-/films', function (req, res) {

    let moviesName = [{ "id": 1, "name": "The Shining" },
    { "id": 2, "name": "Incendies" },
    { "id": 3, "name": "Rang de Basanti" },
    { "id": 4, "name": "Finding Nemo" }]
    res.send(moviesName)
})

//////////////////////////////fifth program/////////////////////////////////////////

router.get('/get-/films/:indexNumber', function (req, res) {

    let moviesName = [{ "id": 1, "name": "The Shining" },
    { "id": 2, "name": "Incendies" },
    { "id": 3, "name": "Rang de Basanti" },
    { "id": 4, "name": "Finding Nemo" }]
    let index = req.params.indexNumber;
    if (index > moviesName.length) {
        return res.send("no movie exist with this id ")
    } else {
        res.send(moviesName[index])
    }
})

module.exports = router;
// adding this comment for no reason






//    // -write an api which gives the missing number in an array of integers starting from 1….e.g [1,2,3,5,6,7] : 4 is missing
//     router.get("/sol1", function(req,res) {
//      let arr= [1,2,3,5,6,7]
//      let missingNumber, sumOfarr, n;
//      n=arr[arr.length-1]
//      sumOfarr=arr.reduce ((a,b)=>a+b)
//      missingNumber=(n*(n+1)/2-sumOfarr)
//      console.log(missingNumber)
//      res.send(  {  data: missingNumber  }  );
// });

//    // -write an api which gives the missing number in an array of integers starting from anywhere….e.g [33, 34, 35, 37, 38]: 36 is missing
//    router.get("/sol2", function (req, res) {
//     let arr= [33, 34, 35, 37, 38]
//     let missingNumber, sumOfarr, n;
//     n=arr.length+1
//     sumOfarr=arr.reduce ((a,b)=>a+b);
//      missingNumber=(n*(arr[0]+arr[arr.length-1])/2)-sumOfarr;
//       console.log(missingNumber)
//     ///LOGIC WILL GO HERE

//     res.send(  {  data: missingNumber  }  );
// });


// module.exports = router;
// // adding this comment for no reason
