import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const[name,setName] = useState("");
  const[move,setMove] = useState();
  const [num,setNum]= useState();
  useEffect(()=>{  
    async function api(){
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/'+num);
    setName(response.data.name)
    setMove(response.data.moves.length);
 }
api();
})
  const changeHandler = (event) => {
      setNum(event.target.value);
    
  }
  

  
  return (
    <>
      <h1>You Selected Number {num}</h1>
      <h1>You Name is <span style={{color: "red"}}>{name}</span></h1>
      <h1>I have <span style={{color: "red"}}>{move} moves</span></h1>
      

      <select value={num} onChange={changeHandler}>
      <option value="none" selected disabled hidden>
          Select an Option
      </option>
        <option value="1"> 1 </option>
        <option value="25"> 25 </option>
        <option value="3"> 3 </option>
        <option value="4"> 4 </option>
        <option value="5"> 5 </option>
      </select>
    </>
  );
}

export default App;
