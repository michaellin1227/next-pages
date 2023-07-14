import { useCallback, useEffect, useState } from "react";
import useDebounce from "@/hooks/useDebounce";

export default function Debounce2() {
  const [keyword, setKeyword] = useState('');
  const [display, setDisplay] = useState(keyword);
  console.log('Debounce2 render');

  
  const f1 = useCallback(()=>{
    setDisplay(keyword)
    console.log('Debounce2 發 request ----------------');
  }, [keyword])

  useDebounce(f1, 3000);


  return (
    <div style={{border: '1px solid blue'}}>
      Debounce2
      <form onSubmit={(e)=>e.preventDefault()}>
        <input type="text" name="keyword" id="keyword" onChange={(e)=>{
            setKeyword(e.target.value)
        }}/>
      </form>
      <div>{display}</div>
    </div>
  );
}
