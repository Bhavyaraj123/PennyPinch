import React , {createContext , useReducer} from 'react';
// createContext let you provide context that component can provide or read.
import AppReducer from './AppReducer';
// intial state
const initialState ={
    transaction:[
        {id:1 , text:'Flower' , amount:-20},
        {id:2 , text:'Salary' , amount:300},
        {id:3 , text:'Book' , amount:-10},
        {id:4 , text:'Camera' , amount:150},
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