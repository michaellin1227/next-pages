import { useState } from 'react';
import CompB from '@/components/CompB'
import CompC from '@/components/CompC'

export default function CompA() {

const [count, setCount] = useState(1);
  
return (
    <>
      <div>CompA</div>
      <div>
        <CompB count={count} setCount={setCount}/>
        <CompC count={count}/>
      </div>

    </>
  );
}