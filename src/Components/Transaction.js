import React, { useContext, useState } from "react";
import { GlobalContext } from "../contex/GlobalState";

const Transaction = () => {
    const { transaction } = useContext(GlobalContext);
    const [hoveredId, setHoveredId] = useState(null); 
    const { deletTransaction } = useContext(GlobalContext);
   
    return (
        <div>
            {transaction.map((item) => {
                const sign = item.amount < 0 ? "-" : "+";
                return (
                    <li
                        key={item.id} 
                        className={`border-r-8 ${item.amount < 0 ? 'border-red-600' : 'border-green-600'} rounded-lg mb-2 p-2 flex w-80 justify-between bg-white font-semibold text-lg`}
                        onMouseEnter={() => setHoveredId(item.id)} 
                        onMouseLeave={() => setHoveredId(null)} 
                    >
                        {item.text} <span>{sign}${Math.abs(item.amount)}</span>
                        {hoveredId === item.id && ( 
                            <button 
                                className="text-white bg-red-500 px-2 rounded-lg hover:bg-red-700" 
                                onClick={() => deletTransaction(item.id)}
                            >
                                X
                            </button>
                        )}
                    </li>
                );
            })}
        </div>
    );
};

export default Transaction;
