const express = require ("express") 
const bodyparsar = require ("body-parser");
const router=require("./router/route")
const app=express();


app.use(bodyparsar.json())



app.use("/",router)
app.listen(process.env.PORT|| 3000, function() {
    console.log("Hello Archana Express app running on port "+(process.env.PORT || 3000 ))
});
