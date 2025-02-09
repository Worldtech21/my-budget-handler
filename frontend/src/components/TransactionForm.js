import React, { useState } from "react";
import axios from "axios";

function TransactionForm() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/transactions", { text, amount });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter transaction" />
      <input value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" />
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default TransactionForm;
