import { useEffect, useState } from "react";

export default function useLocalStorageJson(key, init={}) {
    const [val, setVal] = useState(init);

    useEffect(()=>{
        const str = localStorage.getItem(key);
        let data = {};
        if(str){
            try {
                data = JSON.parse(str)
            } catch(ex){}
        }
        setVal(data);

    }, [key]);

    const saveVal = (v)=>{
        localStorage.setItem(key, v)
        setVal(v);
    }

    return [val, saveVal]
}
