import Navbar from "@/components/Navbar";
import { useState, useContext } from "react";
import AuthContext from "@/contexts/AuthContext";
import LifeA from "@/components/LifeA";


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
        </div>
      </div>
    </>
  );
}
