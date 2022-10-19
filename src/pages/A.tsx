import * as React from "react"

const arc = {
  fill: "none", strokeWidth: "40",
}

const A = ({ 
  text, 
  radius, 
  color, 
  textColor, 
  idName, 
  startOffset = '25%',
  onMouseAEnter,
  onMouseALeave,
}: any) => (
  <g
   onMouseEnter={onMouseAEnter}
  onMouseLeave={onMouseALeave}
  >
    <path id={`${idName}`} d={`M -${radius} 0
      A ${radius} ${radius} 0 0 1 ${radius}  01` }
      stroke={color}
      style={arc} />
    <text dy="3" style={{ fill: textColor }}>
      <textPath alignment-baseline="top" xlinkHref={`#${idName}`} startOffset="23%">
        {text}
      </textPath>
    </text>
  </g>
)

export default A
