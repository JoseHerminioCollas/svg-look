import * as React from "react"
import B from './B'

const C = () => {
  const circleCount = 1

  return (<svg x="10%" y="10%" width="90%" height="90%" >
    <rect x="0" y="0" width="90%" height="100%" fill="red" />
    {[...Array(circleCount)].map((v, i) => {
      const radius = 15
      const inc = 30
      const circleStart = 190
      const circlePlacement = circleStart + i * inc
      const offsetX = 40
      const offsetY = 40
      const x = Math.cos(circlePlacement * (Math.PI / 180)) * radius + offsetX
      const y = Math.sin(circlePlacement * (Math.PI / 180)) * radius + offsetY

      return (
        <>
          <B x={x} y={y} radius={2} />
          <circle fill="#F7941E" stroke="#231F20" stroke-width="1"
            cx={x} cy={y} r={radius} opacity="0.6" />
        </>
      )
    })}
  </svg>)
}

export default C
