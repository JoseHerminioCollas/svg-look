import * as React from "react"
import type { HeadFC } from "gatsby"

const a = {
  // background: 'blue',
}
const b = {
  fill: 'red',
}
const container = {
  margin: '112px',
  background: 'green',
}
// responsive
// SVG tags inline
// viewBox defined, no width or height attributes
// child elements defined with percentages
const IndexPage = () => {
  return (
    <main style={a}>
      <div style={container}>
        <svg version="1.1" viewBox="0 0 100 100">
          <rect x="0" y="0" width="100%" height="100%" style={b} />
          <circle fill="#F7941E" stroke="#231F20" stroke-width="1"
            cx="50%" cy="40%" r="10%" opacity="0.6" />
        </svg>
      </div>

    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
