import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from '../store/countSlice'
import style from "./Home.module.css"
import frog from './asse/frog.png';

function Home() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className={style.box}>
      <div className={style.header}>
        <div className={style.tree}></div>
        <div className={style.mountain}></div>
      </div>

      <div className={style.river}>
        <div className={style['heye-box']} id="myButton">Click me</div>
      </div>

      <div className={style.platform}>
        <div className={style.frog} >
          <img src={frog} alt="My Image" />
        </div>
      </div>
    </div>
  )
}


export default Home