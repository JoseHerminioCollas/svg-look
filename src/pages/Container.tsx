import * as React from "react"
import A from './A'
import C from './C'

const container = {
    margin: '50px',
  }
  
  const c = {
    fill: 'green',
    width: 15,
    height: 15
  }
  const d = {
    fill: "rgba(255, 155, 155, 0.5)", 
  }
const t = -42
const Container = () => {
    const d = `M10,50   c0,${t}   70,${t}   70,0 s10,10 10,10`
    return (
      <div style={container}>
        <svg version="1.1" viewBox="0 0 100 100">
            <path d={d} style={c} />
          <A x="0" y="0" style={c} />
          <C />

        </svg>
      </div>
    )
  }
  
  export default Container
