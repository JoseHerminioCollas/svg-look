import * as React from "react"
import B from './B'

const circleCount = 10
const diskRadius = 16
const groupRadius = 140
const inc = 20
const circleStart =  180
const offsetX = 150
const offsetY = 160

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
          <circle cx={x} cy={y} r={diskRadius} fill="green" stroke="black" strokeWidth="3" />
          {/* <circle fill="blue" cx="50%" cy="70%" r="40" opacity="1" id="c" /> */}
        </>
      )
    })}
  </svg>)
}

export default C
