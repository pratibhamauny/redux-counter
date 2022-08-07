import React from 'react'
import {connect}from "react-redux"
import { countIncrement ,countDecrement,countReset} from '../actions/index'
const buttons=(props)=>{
   
    return(
        <div>
            <h2>count : {props.count}</h2>
            <button onClick={()=>props.countIncrement()}>Increment</button>
            <button onClick={()=>props.countDecrement()}>Decrement</button>
            <button onClick={()=>props.countReset()}>Reset</button>
        </div>
    )
}
const mapStatetoProps=(state)=>{
    return{count:state.count}
}


const Buttons=connect(mapStatetoProps,{countIncrement,countDecrement,countReset})(buttons)
export default Buttons