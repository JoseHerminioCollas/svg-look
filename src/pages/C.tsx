import * as React from "react"
import B from './B'

const circleCount = 10
const diskRadius = 5
const groupRadius = 130
const inc = 20
const circleStart =  180
const offsetX = 0
const offsetY = 0

const C = () => {
  const RADIANS = Math.PI/180;
  const {cos, sin, sqrt} = Math;
  
  return (<  >
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
  </ >)
}

export default C
