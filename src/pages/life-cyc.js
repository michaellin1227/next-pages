import Navbar from "@/components/Navbar";
import { useState, useContext } from "react";
import AuthContext from "@/contexts/AuthContext";
import LifeA from "@/components/LifeA";
import Debounce1 from "@/components/Debounce1";
import Debounce2 from "@/components/Debounce2";


export default function LifeCyCle() {

  const [show, setShow] = useState(false);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-6">
            <button onClick={()=>{
                setShow(old=>!old)
            }}>toggle</button>

            {show && <LifeA />}
            
          </div>
          <div className="col-6">
            {/* <Debounce1/> */}
          </div>
          
          <div className="col-6">
            <Debounce2 />
          </div>
        
        </div>
      </div>
    </>
  );
}
