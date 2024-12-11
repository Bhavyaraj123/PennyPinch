import React, { useContext } from "react";
import { GlobalContext } from "../contex/GlobalState";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transaction } = useContext(GlobalContext);
  

  return (
    <div className="flex justify-start mt-8 items-center w-[100%]">
      <div className="flex flex-col justify-start items-start mt-5">
        <h3 className="text-2xl font-semibold mb-3">History</h3>
        <ul className="flex flex-col w-[100%]">
            <Transaction transaction = {transaction} key={transaction.id}/>
        </ul>
      </div>
    </div>
  );
};

export default TransactionList;
