//import React from 'react';
import { INCREMENT,DECREMENT,RESET } from '../constants/index';

const intialState={
    count:0
}

const rootReducer=(state=intialState,action)=>{
    switch(action.type){
        case INCREMENT:
        //console.log(state.count)
         return{count:state.count+1}
        case DECREMENT:
            return{count:state.count-1}
        case RESET:
            return intialState
        default:
            
            return state
    }
    
}

export default rootReducer