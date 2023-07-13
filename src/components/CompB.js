
export default function CompB({count,setCount}) {
  
  return (
    <>
      <div>CompB</div>
      <button
        onClick={() => {
          setCount((prevVal) => prevVal + 1);
        }}
      >
        {count}
      </button>
    </>
  );
}
