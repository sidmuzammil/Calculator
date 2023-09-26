import React, { useState } from 'react'
import "./Main.css"

export const Main = () => {
    const [mainValue,setMainValue]=useState('')
  return (
    <div className='Container'>
        <div className='second-Container'>
        <div className="input">
          <input type="text" value={mainValue} />
        </div>
        <div className='top-btn'>
        <button className='gray' onClick={e => setMainValue(mainValue.slice(0,-1))} >AC</button>
        <button className='gray'  onClick={e => setMainValue("")} >DEL</button>
        <button className='gray' value="%" onClick={e => setMainValue(mainValue+e.target.value)} >%</button>
        <button value="/" className='orange' onClick={e => setMainValue(mainValue+e.target.value)}>÷</button>
       </div>
       <div>
        <button value="1" onClick={e => setMainValue(mainValue+e.target.value)}>1</button>
        <button value="2"  onClick={e => setMainValue(mainValue+e.target.value)}>2</button>
        <button value="3" onClick={e => setMainValue(mainValue+e.target.value)}>3</button>
        <button value="+" onClick={e => setMainValue(mainValue+e.target.value)} className='orange hang'>+</button>
       </div>
       <div>
        <button value="4" onClick={e => setMainValue(mainValue+e.target.value)}>4</button>
        <button value="5"  onClick={e => setMainValue(mainValue+e.target.value)}>5</button>
        <button value="6" onClick={e => setMainValue(mainValue+e.target.value)}>6</button>
        <button value="-" onClick={e => setMainValue(mainValue+e.target.value)} className='orange hang'>-</button>
       </div>
       <div>
        <button value="7" onClick={e => setMainValue(mainValue+e.target.value)}>7</button>
        <button value="8"  onClick={e => setMainValue(mainValue+e.target.value)}>8</button>
        <button value="9" onClick={e => setMainValue(mainValue+e.target.value)}>9</button>
        <button value="*" onClick={e => setMainValue(mainValue+e.target.value)} className='orange hang'>x</button>
       </div>
       <div>
        <button value="0" onClick={e => setMainValue(mainValue+e.target.value)}>0</button>
        <button value="00"  onClick={e => setMainValue(mainValue+e.target.value)}>00</button>
        <button value="=" onClick={e => setMainValue(eval(mainValue))} className='orange equal'>=</button>
       </div>
        </div>
    </div>
  )
}
