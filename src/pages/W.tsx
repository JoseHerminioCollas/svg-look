import * as React from "react"

const RD = Math.PI / 180;
const { cos, sin } = Math;

// wedge corner
const wedgeCornerDeg = -60
const wedgeRadius = 175
const wX = cos(wedgeCornerDeg * RD) * wedgeRadius
const wY = sin(wedgeCornerDeg * RD) * wedgeRadius

const W = ({ onClick }: any) => {
  const [s, setS] = React.useState(1)
  const [s1, setS1] = React.useState(1)
  const [s2, setS2] = React.useState(1)
  const states2: any = [[s, setS], [s1, setS1], [s2, setS2]]

  const action = (id: any) => {
    states2.forEach((e: any) => (e[1](1)))
    states2[id][1](1.05)
  }

  return (
    <>
      {[
        { label: 'A', fill: 'green' },
        { label: 'B', fill: 'blue' },
        { label: 'C', fill: 'red' }
      ].map((e, i) => {
        // text values
        const textStart = 210
        const textIncrement = 60
        const textGroupRadius = 100
        const textDeg = textStart + i * textIncrement
        const tX = cos(textDeg * RD) * textGroupRadius
        const tY = sin(textDeg * RD) * textGroupRadius

        return (
          <>
            <path d={`M 0 0 
              L 175 0 
              A 175 175, 0, 0, 0, ${wX} ${wY} Z`}
              style={{
                fill: e.fill,
                transform: `rotate(${240 + i * 60}deg) scale(${states2[i][0]})`
              }}
              data-id={i}
              onClick={({ target }: any) => {
                onClick(target.dataset.id)
                action(target.dataset.id)
              }}
            />
            <text
              dominant-baseline="middle" text-anchor="middle"
              x={tX} y={tY} style={{ fill: 'black' }}>
              {e.label}
            </text>
          </>)
      })}

    </>
  )
}

export default W
