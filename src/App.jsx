import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Users from './Users'


function App() {
 
  // simple function 
  function alart1(){

    alert('click 1 number btn')
  }
//  arrow function 

 const alart2 = () =>{
       
  alert('click 2 number btn')

 }

//   vajaila jinis 

 const sum = (num) =>{
    
  alert( num + 5)
 }
  return (
    <>
       <h2>React core concepts part 2</h2>

      <Users> </Users>

     

      <Counter></Counter>
      
      <button onClick={alart1} >click 1 </button>

      <button onClick={alart2} >click 2 </button>

      <button onClick={ () => alert('clcik 3 number btn ')}>click 3 </button>
      
      <button onClick={() => sum(4) }>click 4 </button>
    </>
  )
}

export default App
