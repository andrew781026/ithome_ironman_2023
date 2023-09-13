import {useState} from 'react'

const divStyle = {
  color: 'black',
  backgroundColor: 'red',
  height: '200px',
  width: '90vw',
  padding: '1rem',
  fontSize:'3rem'
};

export default function BottomDiv() {

  return (
    <div style={divStyle}>
      BottomDiv
    </div>
  )
}
