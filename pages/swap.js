import React, { useState } from 'react';
//import state from "../state";


const Engine = () => {
    const [inputOne, setInputOne] = useState('');
    const [inputTwo, setInputTwo] = useState('');
    function swap(){
      let newSwap = {
        token: inputOne,
        value: inputTwo
      };

      //state.Swap.push(newSwap)
      console.log(token)
      console.log(value)
    }

return(
    <div>
        <form>
        <input type="number" name = 'input1' value = {inputOne}
         onChange={(event)=>setInputOne(event.target.value)} ></input>
        <input type="number" name = 'input1' value = {inputTwo}
         onChange={(event)=>setInputTwo(event.target.value)} ></input>
         <input type="submit" value="Отправить" onClick={swap}/>
        </form>
    </div>
    
)
}
export default Engine;