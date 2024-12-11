import React, { useContext, useState } from "react";
import { GlobalContext } from "../contex/GlobalState";

const AddTransaction = () => {
  const { transaction } = useContext(GlobalContext); // Potentially unused
  const [text, setText] = useState(""); // Empty string initially
  const [number, setNumber] = useState(0); // Number (0) initially
const {addTransaction} = useContext(GlobalContext)
  const textChange = (e) => {
    setText(e.target.value);
  };

  const setNum = (e) => {
    const value = e.target.value;
    // Allow empty, "-" or valid number strings
    if (value === "" || value === "-" || !isNaN(value)) {
      setNumber(value);
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    setText("");
    setNumber(0);

    if (!text.trim()) {
      alert("Please enter a description for the transaction.");
      return;
    }

    const amount = parseFloat(number);
    if (isNaN(amount) || amount === 0) {
      alert("Please enter a valid amount (positive or negative).");
      return;
    }

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: parseFloat(number), // Parse to number again
    };

    addTransaction(newTransaction); // Call the function from GlobalContext
  };

  return (
    <div className="Addtransactionn flex flex-col justify-start items-start mt-8">
      <div className="flex flex-col">
        <h3 className="font-semibold text-xl">Add New Transaction</h3>
        <form onSubmit={submitForm}>
          <div className="flex flex-col mb-2">
            <label className="text-lg font-semibold">Text:</label>
            <input
              type="text"
              id="text"
              value={text}
              onChange={textChange}
              placeholder="Enter text"
              className="p-2 border-gray-500 border-2 rounded-lg w-80"
            />
          </div>
          <div className="flex flex-col mb-2">
            <label className="text-lg font-semibold mb-2 w-80">
              Amount: (negative - expense, positive - income)
            </label>
            <input
              type="number"
              id="number" // Corrected typo (nnumber -> number)
              value={number}
              onChange={setNum}
              placeholder="Enter Number"
              className="p-2 border-gray-500 border-2 rounded-lg w-80"
            />
          </div>
          <button className="btn border-2 mt-3 border-transparent p-2 bg-blue-500 text-white font-semibold text-lg rounded-lg">
            Add Transaction
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTransaction;