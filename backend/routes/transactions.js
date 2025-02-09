const express = require("express");
const router = express.Router();
const Transaction = require("../models/Transaction");

// Get all transactions
router.get("/", async (req, res) => {
  const transactions = await Transaction.find();
  res.json(transactions);
});

// Add transaction
router.post("/", async (req, res) => {
  const { text, amount, type } = req.body;
  const transaction = new Transaction({ text, amount, type });
  await transaction.save();
  res.json(transaction);
});

// Delete transaction
router.delete("/:id", async (req, res) => {
  await Transaction.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

module.exports = router;
