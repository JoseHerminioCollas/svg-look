import * as React from "react"

const q = {
  fill: "green", strokeWidth: "2", stroke: "black"
}

const B = ({ x, y, radius }: any) => (
  <>
    <g width="30" style={{ transform: 'translate(50%,  50px )' }} >
      <text x="0" y="0" >
        xxxxxxxxxxxxxxxxx
      </text>
      <path d="M  25 5 
                    A 45 45, 0, 0, 1, 75 55
                    L 25 55   Z"
        style={q}
      />
      <rect x="0" y="0" style={{ width: '100%', height: 10, fill: 'red' }} />

    </g>
  </>)

export default B