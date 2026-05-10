const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

app = express();

app.use(cors());
app.use(express.json());

app.get("/",(req,res) =>{
    res.send("API is now Running")
});

mongoose
    .connect(process.env.MONGO_URI)
    .then(() =>{

        console.log("Databse is connected");
        app.listen(process.env.PORT, () =>{
            console.log("Server is listening to PORT 5000")
        });
    })
    .catch(err => console.error(err))

