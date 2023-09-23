import { useState } from 'react';

const counterStyle = {
  display: 'grid',
  fontSize: '2em',
  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  placeItems: 'center',
  marginTop:'2em',
  backgroundColor:'blue'
};

export default function Counter({children,}) {
  const [count, setCount] = useState(0);
  const add = () => setCount((i) => i + 1);
  const subtract = () => setCount((i) => i - 1);

  return (
    <>
      <div style={counterStyle}>
        <button onClick={subtract}>-</button>
        <pre>{count}</pre>
        <button onClick={add}>+</button>
      </div>
    </>
  );
}
