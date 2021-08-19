import React,{ useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ListCom from './listCom';
import './index.css'


function App() {
  const [inputItem, setInputItem] = useState("");
  const [listItem, setListItem] = useState([]);
  const changeHandler = (event) => {
     setInputItem(event.target.value)
  }

 const clickHandler = (event) => {
    event.preventDefault();
    
    setListItem((prevValue) => {
    return [...prevValue, inputItem];
    
   })
   setInputItem("");
}



  return (
    <div className="main_div">
    <div className="center_div">
    <br />
    <h1>ToDo List</h1>
    <br />
    <input type="text" placeholder="Add Items" onChange={changeHandler} value={inputItem}></input>
    <Button className="newBtn" onClick={clickHandler}><AddIcon /></Button>
    <br />
    <ol>
      {listItem.map((item,index)=>{
        return <ListCom key={index} text={item}/>
      })}
    </ol>
    <br />

    </div>
    </div>
  );

}
export default App;
