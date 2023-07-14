import { useEffect, useState } from "react";

export default function Debounce1() {
  const [keyword, setKeyword] = useState(10);

  console.log({keyword});


  useEffect(() => {
    console.log("已更新");
    const tid = setTimeout(()=>{
        console.log("發 request -------------------");
    }, 500);

    return ()=>{
        console.log("將要更新");
        clearTimeout(tid);
    }
  }, [keyword]);

  return (
    <div style={{border: '1px solid gray'}}>
      Debounce1
      <form onSubmit={(e)=>e.preventDefault()}>
        <input type="text" name="keyword" id="keyword" onChange={(e)=>{
            setKeyword(e.target.value)
        }}/>
      </form>
    </div>
  );
}
