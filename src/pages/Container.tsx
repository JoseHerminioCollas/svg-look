import * as React from "react"
import A from './A'
import C from './C'

const container = {
    margin: '50px',
    background: 'rgba(255, 255, 55, 0.5)',
  }
  
  const c = {
    fill: 'green',
    width: 15,
    height: 15
  }
  
const Container = () => {
    return (
      <div style={container}>
        <svg version="1.1" viewBox="0 0 100 100">
          <A x="0" y="0" style={c} />
          <C />
        </svg>
      </div>
    )
  }
  
  export default Container
