import React from 'react'
import { useState } from 'react'
const CountDownLightSwitch = () => {
    const [toggle,setToggle]=useState(true)
    const [counter,setCounter]=useState(30)
   const style={
    dark:{
            backgroundColor:'cyan'
    },
    whilte:{
        backgroundColor:"white"
    },
    body:{
        position:"flex",
        border:'1px solid black',
        borderRadius:'18px',
        boxShadow:"20px 0px green",
        transform:'translateZ(50)',
        right:'30%',
        top:"20px"

    }
   } 
   function reset(){
    counter=30
    
   }
   function light(){
    const style=style.white
   }
   function dark(){
    const style=style.dark
   }
   function timer(){
    
          setInterval(() => {
            settimeout(() => {
             
            if(counter!=0 )
                setCounter(counter-1)
            else
                reset()
        
            }, 1000);
              }, 1000);
              set
    
   }
  return (
    <div style={style.body}>
        <h2>countdown and Light Switch</h2>
     <input type="checkbox"  />Light Mode 
      <br />
  
    
    
    <p>{counter}s</p>
     
     <button   onClick={timer}>Start Timer </button>
     </div>
     )
}

export default CountDownLightSwitch
