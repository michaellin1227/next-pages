import Navbar from "@/components/Navbar";
import { useState, useContext } from "react";
import AuthContext from "@/contexts/AuthContext";


export default function TryAuth() {

  const { auth, setAuth } = useContext(AuthContext);
  const [data, setData] = useState({});

  const getData = async ()=>{
    try{
        const Authorization = 'Bearer ' + auth.token;
        const r = await fetch(process.env.API_SERVER+'/ab/api/verify/100',{
            headers: {
                Authorization,
            }
        });
        const result = await r.json();
        setData(result);

    }catch(ex){
        console.log(ex)
    }
  };


  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-6">
            <button onClick={getData}>取資料</button>
            <pre>{ JSON.stringify(data, null, 4)}</pre>
          </div>
        </div>
      </div>
    </>
  );
}
