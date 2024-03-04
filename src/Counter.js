import React from "react";
import {useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./Action";

const Counter = ()=>{
  const count = useSelector(state=> state.counter)
  const dispatch = useDispatch()

  return(<div>
  <p className={count < 0? "negative": count > 0? "positive": "p"}>{count}</p>
  <button onClick={()=>dispatch(decrement())}>-</button>
  <button onClick={()=>dispatch(increment())}>+</button>
  </div>)
}
export default Counter;