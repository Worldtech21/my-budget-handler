import React from "react";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";

function App() {
  return (
    <div>
      <h1>Finance Tracker</h1>
      <TransactionForm />
      <TransactionList />
    </div>
  );
}

export default App;
