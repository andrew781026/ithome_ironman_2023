import { useStore } from '@nanostores/react';
import { storeCounter } from '../store/counter.js';

const counterStyle = {
  display: 'grid',
  fontSize: '2em',
  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  placeItems: 'center',
  marginTop:'2em',
  backgroundColor:'blue'
};

export default function Counter() {

  // read the store value with the `useStore` hook
  const $counter = useStore(storeCounter);

  return (
    <>
      <div style={counterStyle}>
        <button onClick={() => storeCounter.set($counter-1)}>-</button>
        <pre>{$counter}</pre>
        <button onClick={() => storeCounter.set($counter+1)}>+</button>
      </div>
    </>
  );
}
