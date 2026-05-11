const mongoose = require("mongoose");
const Product = require("./models/Product");
require("dotenv").config();

const products = [
    { id: 1, name: "Cheese Pizza", price: 12.5, image: "Cheese_Pizza.webp" },
    { id: 2, name: "Pepperoni Pizza", price: 14.5, image: "Pepperoni_Pizza.webp" },
    { id: 3, name: "BBQ Chicken Pizza", price: 15.0, image: "BBQ_Chicken_Pizza.png" },
    { id: 4, name: "Soda", price: 1.5, image: "Soda.png" },
    { id: 5, name: "Lemonade", price: 2.75, image: "Lemonade.png" },
    { id: 6, name: "Ice Tea", price: 2.75, image: "Ice_Tea.png" },
    { id: 7, name: "Chicken Cutlet", price: 7.75, image: "Chicken_Sandwich.png" },
    { id: 8, name: "Sausage Parmigiana", price: 7.5, image: "Sausage_Sandwich.png" },
    { id: 9, name: "Meatball Parmigiana", price: 7.5, image: "Meatball_Sandwich.png" },
    { id: 10, name: "Spaghetti W/Meatballs", price: 9.25, image: "Spaghetti_Meatballs.png" },
    { id: 11, name: "Spaghetti W/Parmensen", price: 6.75, image: "Spaghetti_Parmesen.png" },
    { id: 12, name: "Spaghetti W/Shrimp", price: 12.5, image: "Spaghetti_Shrimp.png" },
];

mongoose
    .connect(process.env.MONGO_URI)
    .then(async () => {
        await Product.deleteMany();
        await Product.insertMany(products);
        console.log("Database seeded!");
        process.exit();
    })