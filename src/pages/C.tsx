import * as React from "react"
import B from './B'

const circleCount = 8
const diskRadius = 3
const groupRadius = 25
const inc = 23
const circleStart = 190
const offsetX = 45
const offsetY = 45

const C = () => {
  const RADIANS = Math.PI/180;
  const {cos, sin, sqrt} = Math;
  
  return (<svg x="0%" y="10%" width="90%" height="90%" >
    {[...Array(circleCount)].map((v, i) => {
      const circlePlacement = circleStart + i * inc
      const x = Math.cos(circlePlacement * (Math.PI / 180)) * groupRadius + offsetX
      const y = Math.sin(circlePlacement * (Math.PI / 180)) * groupRadius + offsetY

      return (
        <>
          <B x={x} y={y} radius={diskRadius} />
          <circle fill="blue" cx="45" cy="45" r="22" opacity="0.2" id="c" />
        </>
      )
    })}
  </svg>)
}

export default C
