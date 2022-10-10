import * as React from "react"

const q = {
  fill: "green", strokeWidth: "2", stroke: "black"
}
const r = {
  fill: "none", strokeWidth: "32", stroke: "gray"
}
const arc = {
  fill: "none", strokeWidth: "30", stroke: "gray"
}
// text, radius color textColor idName startOffset
const A = ({ x, y, style, }: any) => (
  <>
    <path id="abc" d="M -100 0
                    A 100 100 0 0 1 100  0"
      style={arc} />
    <text dy="3" style={{ fill: 'black' }}>
      <textPath alignment-baseline="top" xlinkHref="#abc" startOffset="23%">
        Lorum Ipsum Dolor Sit
      </textPath>
    </text>
  </>
)

export default A
