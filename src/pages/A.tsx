import * as React from "react"

const q = {
  fill: "green", strokeWidth: "2", stroke: "black"
}
const r = {
  fill: "none", strokeWidth: "32", stroke: "gray"
}

const A = ({ x, y, style }: any) => (
  <>
    {/* wedge */}
    <path d="M 80 80
                    A 45 45, 0, 0, 0, 125 125
                    L 125 80   Z"
      style={q}
    />
    <path d="M  25 5 
                    A 45 45, 0, 0, 1, 75 55
                    L 25 55   Z"
      style={q}
    />
    {/* arc */}
    <path id="abc" d="M  50 150
                    A 60 60 0 0 1 250 150"
      style={r} />
    <text dy="3">
      <textPath alignment-baseline="top" xlinkHref="#abc" startOffset="23%">
        Dangerous Curves Ahead
      </textPath>
    </text>

  </>
)

export default A
