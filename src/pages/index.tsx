import * as React from "react"
import type { HeadFC } from "gatsby"

const a = {
  // background: 'blue',
}
const b = {
  fill: 'red',
}
const c = {
  fill: 'blue',
  width: '1px',
}
const container = {
  margin: '112px',
  background: 'green',
}
const A = ({ x, y }: any) => (
  <rect x={x} y={y} height="10%" style={c} />
)

const B = (props) => (
  <circle fill="#F7941E" stroke="#231F20" stroke-width="1"
    cx="50%" cy="40%" r="10%" opacity="0.6" />
)
// responsive
// SVG tags inline
// viewBox defined, no width or height attributes
// child elements defined with percentages
const IndexPage = () => {
  return (
    <main style={a}>
      <div style={container}>
        <svg version="1.1" viewBox="0 0 100 100">
          {[...Array(6)].map((v, i) => (<A x={Math.sin(i * 10)} y="10" />))}
          <B />
          {/* <rect x="0" y="0" width="100%" height="100%" style={b} /> */}
          {/* <circle fill="#F7941E" stroke="#231F20" stroke-width="1"
            cx="50%" cy="40%" r="10%" opacity="0.6" /> */}
        </svg>
      </div>

    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
