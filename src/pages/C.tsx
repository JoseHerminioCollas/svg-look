import * as React from "react"
import B from './B'

const circleCount = 10
const diskRadius = 15
// const groupRadius = 130
const inc = 20
const circleStart = 180
// const offsetX = 0
// const offsetY = 0

const C = ({ groupRadius = 130 }) => {
  const RADIANS = Math.PI / 180;
  const { cos, sin, sqrt } = Math;

  return (<  >
    {[...Array(circleCount)].map((v, i) => {
      const circlePlacement = circleStart + i * inc
      const x = Math.cos(circlePlacement * (Math.PI / 180)) * groupRadius
      const y = Math.sin(circlePlacement * (Math.PI / 180)) * groupRadius

      return (
        <>
          <circle cx={x} cy={y} r={diskRadius} fill="green" stroke="black" strokeWidth="1" />
          <circle cx={x} cy={y} r={diskRadius + 2} fill="none" stroke="black" strokeWidth="1" />
          <text
            dominant-baseline="middle" text-anchor="middle"
            x={x} y={y}
            style={{ fill: 'black', fontSize: '0.5em' }}
          >
            <tspan x={x} dy="-1em">Addd</tspan>
            <tspan x={x} dy="1.2em">B ddd ddd</tspan>
          </text>
        </>
      )
    })}
  </ >)
}

export default C
