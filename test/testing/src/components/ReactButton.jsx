import { useStore } from '@nanostores/react';
import {storeCount} from '../store/store.js'

const divStyle = {
  color: 'white',
  backgroundColor: 'blue',
  borderRadius: '2rem',
  padding: '1rem',
  marginRight:'1rem'
};

export default function ReactButton() {

  const counting = useStore(storeCount);

  return (
    <div>
      <button
        style={divStyle}
        onClick={() => storeCount.set(counting+1)}>
        React Button
      </button>
      <span>{counting}</span>
    </div>
  )
}
