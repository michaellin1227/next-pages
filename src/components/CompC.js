import { useRef } from "react";

export default function CompC({count}) {
  const refA = useRef()
  const refB = useRef(100)
  refB.current = refB.current || 1;
  console.log("CompC render--");
  return (
    <>
      <div><h2>{count}</h2></div>
      <form ref={refA}>123
      {/* <input type='text' name="age" value={28}></input> */}
      </form>
      
      <button onClick={()=>{
        // console.log(refA.current.innerHTML)
        // console.log(refA.current.age.value)
        console.log(++ refB.current)
      }}>click: {refB.current}</button>
    </>
  );
}
  
