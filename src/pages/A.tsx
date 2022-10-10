import * as React from "react"

// const q = {
//   fill: "green", strokeWidth: "2", stroke: "black"
// }
// const r = {
//   fill: "none", strokeWidth: "32", stroke: "gray"
// }
const arc = {
  fill: "none", strokeWidth: "30",
}
// text, radius color textColor idName startOffset
const A = ({ text, radius, color, textColor, idName, startOffset = '25%' }: any) => (
  <>
    <path id={`${idName}`} d={`M -${radius} 0
                    A ${radius} ${radius} 0 0 1 ${radius}  01` }
      stroke={color}
      style={arc} />
    <text dy="3" style={{ fill: textColor }}>
      <textPath alignment-baseline="top" xlinkHref={`#${idName}`} startOffset="23%">
        {text}
      </textPath>
    </text>
  </>
)

export default A
