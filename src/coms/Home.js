import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from '../store/countSlice'
import style from "./Home.module.css"
import frog from './asse/frog.png';

function Home() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const [show, setShow] = useState(false);
  const [position, setPosition] = useState(0);
  const [move, setMove] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const [items, setItems] = useState([]);

  const data = {
    timer: 5000,
    move: false
  }

  const handleMove = (e) => {
    if (position + e.clientX > window.innerWidth) {
      setPosition(window.innerWidth - e.clientX);
      setShow(false);
    } else {
      setPosition(position + e.clientX);
    }
  };

  function delayMethod(data) {
    setMove(!move)
    setTimeoutId(setTimeout(() => {
      console.log('执行完成', data);
      destruction(data)
    }, data.timer)); // 延迟1秒执行
  }

  function callDelayedMethod() {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
      console.log('延迟执行的方法已执行');
    } else {
      console.log('延迟执行的方法还未执行');
    }
  }

  const Block = ({ id }) => (
    <div className={style['block']} id={id}>
      <p>Block #{id}</p>
    </div>
  );


  const addItem = () => {
    setItems([...items, { id: items.length + 1, move: true, text: `Item ${items.length + 1}` }]);
    setMove(!move)
  };

  const destruction = (data) => {
    console.log("111 销毁", data)
  }
  
  return (
    <div className={style.box}>
      <div className={style.header}>
        <div className={style.tree}></div>
        <div className={style.mountain}></div>
      </div>

      <div className={style.river}>
      
        {/* <div className={style['container']}>
          <Block id="block-1" />
        </div> */}

        <button onClick={() => delayMethod(data)}>点击移动</button>
        <button onClick={addItem}>Add Item</button>

        {/* <div
          className={style['heye-box']}
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: 'blue',
            position: 'absolute',
            left: position,
            top: 0,
            opacity: show ? 1 : 0,
          }}
          onMouseMove={handleMove}
        /> */}

      <div className={style['container']}>
        <div className={`${style['block']} ${style['heye-box']}`} style={{ left: move ? '-100px' : '0', transform: move ? 'translateX(1000px)' : 'translateX(0)' }}>
          左显示
        </div>

        {/* {
          dataArr.length > 0 ?
            dataArr.map((x, index) => {
              return <div key={index}>
                <div className={`${style['block']} ${style['heye-box']}`} style={{ left: '-100px', transform: 'translateX(1000px)' }}>
                  {index}
                </div>
              </div>
            })
          : null
        } */}

        <div>
          {items.map((item) => (
            <div 
              key={item.id} 
              className={`${style['block']} ${style['heye-box']} ${item.move ? style['qwe'] : ''}`} 
              style={{ left: move ? '-100px' : '0', transform: item.move ? 'translateX(1000px)' : 'translateX(0)' }}>
              {item.text}
            </div>
          ))}
        </div>

      </div>

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