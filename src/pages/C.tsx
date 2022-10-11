import * as React from "react"

const RPD = Math.PI / 180
const { cos, sin } = Math

const C = ({
  data = [],
  groupRadius = 80,
  circleCount = 10,
  diskRadius = 36,
  placementInc = 18.25,
  circleStart = 188.5,
}: any) => {

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
            style={{ fill: 'black', fontSize: '1.1em' }}
          >
            {v.text.length === 1 &&
              <>
                <tspan x={x} dy="0">{v.text}</tspan>
              </>
            }
            {v.text.length === 2 &&
              <>
                <tspan x={x} dy="-1em">{v.text[0]}</tspan>
                <tspan x={x} dy="1.1em">{v.text[1]}</tspan>
              </>
            }
            {v.text.length === 3 &&
              <>
                <tspan x={x} dy="-1em">{v.text[0]}</tspan>
                <tspan x={x} dy="1.1em">{v.text[1]}</tspan>
                <tspan x={x} dy="1.1em">{v.text[2]}</tspan>
              </>
            }
          </text>
        </>
      )
    })}
  </ >)
}

export default C
