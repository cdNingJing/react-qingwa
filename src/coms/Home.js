import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from '../store/countSlice'


function Home() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
      <div>
        <div onClick={() => dispatch(increment())}>increment</div>
        <span>{count}</span>
        <div onClick={() => dispatch(decrement())}>decrement</div>
      </div>
    )
}


export default Home