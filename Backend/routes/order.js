const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

router.patch("/:id", async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        items: req.body.items,
        totalAmount: req.body.totalAmount,
      },
      { new: true }
    );

    res.json(updatedOrder);
  } catch (err) {
    res.status(500).json({
      message: "Failed to update order",
    });
  }
});

router.get("/", async (req, res) => {

  try {

    const orders = await Order.find().sort({ createdAt: -1 });

    res.json(orders);

  } catch (err) {

    res.status(500).json({
      message: "Failed to get orders"
    });

  }

});

router.post("/", async (req, res) => {

  try {

    const newOrder = await Order.create(req.body);

    res.status(201).json(newOrder);

  } catch (err) {

    res.status(500).json({
      message: "Failed to create order"
    });

  }

});

router.put("/:id", async (req, res) => {

  try {

    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      { status: "cancelled" },
      { new: true }
    );

    res.json(updatedOrder);

  } catch (err) {

    res.status(500).json({
      message: "Failed to cancel order"
    });

  }

});

router.delete("/:id", async (req, res) => {

  try {

    await Order.findByIdAndDelete(req.params.id);

    res.json({
      message: "Order deleted"
    });

  } catch (err) {

    res.status(500).json({
      message: "Failed to delete order"
    });

  }

});


module.exports = router;