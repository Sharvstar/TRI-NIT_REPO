// const port = 4000;
// const express = require("express");
// const path = require("path");
// const app = express();
// const mongoDB = require("./db");
// mongoDB();

// app.use("/api/")

// app.listen(port , (error)=>{
//     if(error){
//         console.log(error);
//     } else{
//         console.log("Server active on port : "+port);
//     }
// }) ;


// const express = require('express')
// const app = express()
// const port = 5000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })



const port = 4000;
const express = require("express");
const path = require("path");
const app = express();
const mongoDB = require("./db");
mongoDB();

app.use(express.json());
app.use("/api", require('./Routes/CreateUser'))

app.listen(port , (error)=>{
    if(error){
        console.log(error);
    } else{
        console.log("Server active on port : "+port);
    }
}) ;
