
    // it is a folder where we specify out application state changes response to certain actions 
    export default (state , action )=>{
        switch(action.type){
            case 'DELETE_TRANSACTION':
                return{
                    ...state,
                    transaction: state.transaction.filter(item => item.id !== action.payload)

                }
            case 'ADD_TRANSACTION':
                return{
                    ...state,
                    transaction: [action.payload, ...state.transaction]

                }
            default:
                return state;
        }
    }