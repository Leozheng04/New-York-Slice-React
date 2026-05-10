const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    // Example: { id: 1, name: "Cheese Pizza", price: 12.5, image: cheesePizza },
    items : [{
        product_id : Number,
        name: String,
        price: Number,
        quantity: Number,
    }],

    totalAmount: Number,

    status : {
        type: String,
        default: "pending",
    },
}, {timestamps: true})

module.exports = mongoose.model("Order", orderSchema);