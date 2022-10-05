import * as React from "react"
import B from './B'

const circleCount = 8
const diskRadius = 16
const groupRadius = 120
const inc = 23
const circleStart = 190
const offsetX = 143
const offsetY = 135

const C = () => {
  const RADIANS = Math.PI/180;
  const {cos, sin, sqrt} = Math;
  
  return (<svg x="0" y="0" width="100%" height="100%" >
    {[...Array(circleCount)].map((v, i) => {
      const circlePlacement = circleStart + i * inc
      const x = Math.cos(circlePlacement * (Math.PI / 180)) * groupRadius + offsetX
      const y = Math.sin(circlePlacement * (Math.PI / 180)) * groupRadius + offsetY

      return (
        <>
          <B x={x} y={y} radius={diskRadius} />
          <circle fill="blue" cx="50%" cy="70%" r="40" opacity="1" id="c" />
        </>
      )
    })}
  </svg>)
}

export default C
