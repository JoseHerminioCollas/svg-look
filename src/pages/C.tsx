import * as React from "react"

const RPD = Math.PI / 180
const { cos, sin } = Math

const C = ({
  data = [],
  groupRadius = 130,
  circleCount = 10,
  diskRadius = 15,
  placementInc = 20,
  circleStart = 180,
} : any) => {

  return (<>
    {data.map((v, i) => {
      const circlePlacement = circleStart + i * placementInc
      const x = cos(circlePlacement * RPD) * groupRadius
      const y = sin(circlePlacement * RPD) * groupRadius

      return (
        <>
          <circle cx={x} cy={y} r={diskRadius} fill="green" stroke="black" strokeWidth="1" />
          <circle cx={x} cy={y} r={diskRadius + 2} fill="none" stroke="black" strokeWidth="1" />
          <text
            dominant-baseline="middle" text-anchor="middle"
            x={x} y={y}
            style={{ fill: 'black', fontSize: '0.5em' }}
          >
            <tspan x={x} dy="-1em">{v.text}</tspan>
            <tspan x={x} dy="1.2em">B ddd ddd</tspan>
          </text>
        </>
      )
    })}
  </ >)
}

export default C
