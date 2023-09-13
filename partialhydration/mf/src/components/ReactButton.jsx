import {useState} from 'react'

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
        onClick={() => setCount(preCount => preCount + 1)}>
        React Button
      </button>
      <span>{count}</span>
    </div>
  )
}
