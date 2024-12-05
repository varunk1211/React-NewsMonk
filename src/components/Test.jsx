import React, { useEffect, useState } from "react";
import style from "./ComponentStyle/Test.module.css";
export default function Test() {
  const [count, setcount] = useState(1);
  const [b,setb]=useState({
    'color':'red',
  })
  function me() {
      setcount(count+1);
  }
useEffect(()=>{
  if(count%4 === 0){
      setb({
        'color':'blue',
      })
      console.log(b)
    console.log("thsi is only run once" + b);
  }
  return ()=>{
    console.log("compinetn is unmounted")
    setb({
      'color':'red',
    })
  }
},[count])  

  return (
    <div>
      {/* {flag ? <h1 className={style.best} style={{color: falgs?'red':'green '}}>this is true</h1> : null} */}
      <h2 style={b} >count is {count}</h2>
      <button className="btn btn-danger" onClick={me}>
        click me{" "}
      </button>

    </div>
  );
}
