import React,{useState, useEffect, useRef} from "react";

const UseRefExample2 = () => {
  const [name,setName]= useState('')
   const renders =useRef(1);
   const handleChange = (e)=>{
     setName(e.target.value)
   }

   const prevName=useRef();
   useEffect(()=>{
     renders.current++
     prevName.current=name
   },[name]) 
  return (
    <div>
      <h1>Renders {renders.current}</h1>
      <input type="text" onChange={handleChange} value={name}/>
    <h2>PrevName: {prevName.current}</h2>
    </div>
  );
};

export default UseRefExample2;
