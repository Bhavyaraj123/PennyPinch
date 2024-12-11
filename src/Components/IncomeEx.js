import React , {useContext} from 'react';
import { GlobalContext } from "../contex/GlobalState";


const IncomeEx = () => {
  const { transaction } = useContext(GlobalContext);
  const amount = transaction.map(transaction=>transaction.amount);

  const income = amount.filter(item=>item>0).reduce((acc,item)=>(acc+=item),0).toFixed(2);
  const expense = (amount.filter(item=>item<0).reduce((acc,item)=>(acc+=item),0)*-1).toFixed(2);

  return (
    <>
      <div className='flex flex-row  justify-start items-center mt-8  '>
        <div className='flex flex-row  justify-center w-80  bg-[#ffffff] shadow-[0_-4px_6px_rgba(0,0,0,0.1)] drop-shadow-md '>
        <div className='flex flex-col p-5  justify-center item-center  bg-[#ffffff]    '>
            <h2 className='font-semibold text-xl  '>INCOME</h2>
            <h2 className='text-[#64d68c] font-semibold text-xl'>+${income}</h2>
        </div>
        <div className='border-neutral-400 '></div>
        <div className='flex flex-col p-4 ml-4 bg-[#fcfefe] justify-center item-center    '> 
         <h2 className='font-semibold text-xl '>EXPENSE</h2>
        <h2 className='text-[#dc2f2f] font-semibold text-xl'>-${expense}</h2>
        </div>
        </div>
      </div>
    </>
  )
}

export default IncomeEx
