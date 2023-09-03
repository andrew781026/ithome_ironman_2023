import {useState} from 'react'
import { storeCount } from '../store/store.js';

const divStyle = {
  color: 'white',
  backgroundColor: 'blue',
  borderRadius: '2rem',
  padding: '1rem',
  marginRight:'1rem'
};

export default function ReactButton() {

  const [count, setCount] = useState(0);

  return (
    <div>
      <button
        style={divStyle}
        onClick={() => {
          setCount(preCount => {
            storeCount.set(count + 1);
            return preCount + 1;
          });
        }}>
        React Button
      </button>
      <span>{count}</span>
    </div>
  )
}
