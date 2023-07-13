import { useEffect, useState } from "react";

export default function LifeA() {
  const [val, setVal] = useState(10);
  console.log("render----1");

  // didMount
  useEffect(() => {
    console.log("掛載之後");
    return ()=>{
        console.log("將要卸載");
    }
  }, []);

  useEffect(() => {
    console.log("已更新");
    return ()=>{
        console.log("將要更新");
    }
  }, [val]);

  return (
    <div>
      LifeA
      {console.log("render----2")}
    </div>
  );
}
