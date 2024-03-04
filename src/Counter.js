import React from "react";
import {useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./Action";

const Counter = ()=>{
  const count = useSelector(state=> state.counter)
  const dispatch = useDispatch()

  return(<div>
  <p> Counter: {count}</p>
  <button onClick={()=>dispatch(decrement())}>Decrement</button>
  <button onClick={()=>dispatch(increment())}>Increment</button>
  </div>)
}
export default Counter;