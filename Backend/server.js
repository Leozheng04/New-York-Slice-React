const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const productRoutes = require("./routes/product");
const orderRoutes = require("./routes/order");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

app.get("/",(req,res) =>{
    res.send("API is now Running")
    
});

mongoose
    .connect(process.env.MONGO_URI)
    .then(() =>{

        console.log("Databse is connected");
        const PORT = process.env.PORT || 5000;

        app.listen(PORT, () => {
            console.log(`Server is listening on PORT ${PORT}`);
        });
    })
    .catch(err => console.error(err))

