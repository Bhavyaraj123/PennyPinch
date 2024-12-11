import {React, useContext } from 'react';
import { GlobalContext } from "../contex/GlobalState";
  

const Balance = () => {
const { transaction } = useContext(GlobalContext);
const amount = transaction.map(transaction=>transaction.amount);
const total = amount.reduce((acc,item)=>(acc+=item),0).toFixed(2);
  return (
    <>  
      <div className='flex  justify-start items-start flex-col  mt-8'>
        <div className='flex flex-col justify-start items-start'>
        <h2 className='text-2xl font-semibold  '>Your Balance</h2>
        <h1 className='text-3xl font-semibold  '>${total}</h1>
        </div>
      </div>
    </>
  )
}

export default Balance
