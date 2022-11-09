import React from 'react'
import {useState,useEffect} from 'react';

const MyName =()=>{
    const [myName,setMytName] =useState('');
    const [myflage,setMyFlag]=useState(false);
    const [mybtn,setmyBtnName] =useState('');

    function onTextChanged(e){
        console.log(e);
    setMytName(`Hi ${e.target.value} how are you ?`);
    setMytName(e.target.value);
    
    }


    function showText(){
        setmyBtnName(`Hi ${myName} keep going`);
        setMyFlag(true);
        }

return (
    <div> 
        <label htmlFor='#myName'>Your Name : </label>
        <input onChange={onTextChanged} />
       
        <p>{myflage?mybtn:myName } </p>
        <button onClick={showText}> Motivate</button>
    </div>
)




}
export default MyName;