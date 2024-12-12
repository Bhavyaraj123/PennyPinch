import React , {createContext , useReducer} from 'react';
// createContext let you provide context that component can provide or read.
import AppReducer from './AppReducer';
// intial state
const initialState ={
    transaction:[
   
    ]
}


// create context   
export  const GlobalContext = createContext(initialState);


// provider
export const GlobalProvider = ({children})=>{
    // when we want to  use reducer we have to use dispatch .


    // actions
    const[state , dispatch] = useReducer(AppReducer , initialState);
    function deletTransaction(id){
        dispatch({
            type:'DELETE_TRANSACTION',
            payload:id
        });
    }
    function addTransaction(transaction){
        dispatch({
            type:'ADD_TRANSACTION',
            payload:transaction
        });
    }
    return  (<GlobalContext.Provider value={{
        transaction: state.transaction,
        deletTransaction,
        addTransaction
    }}>


        {children}
    </GlobalContext.Provider>)

}