import * as React from "react"

const RD = Math.PI / 180;
const { cos, sin } = Math;
const wedge = {
  fill: "blue", stroke: "black", strokeWidth: "2",
  transform: 'rotate(-0deg)'
}

const W = () => {
  // wedge corner
  const rad2 = -60
  const cSize2 = 90
  const x2 = cos(rad2 * RD) * cSize2
  const y2 = sin(rad2 * RD) * cSize2
// wedge corner start = 240
 // wedgeIncrement = 60
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
        const textGroupRadius = 60
        const textDeg = textStart + i * textIncrement
        const tX = cos(textDeg * RD) * textGroupRadius
        const tY = sin(textDeg * RD) * textGroupRadius

        return (
          <>
            <path d={`M 0 0 
              L 90 0 
              A 100 100, 0, 0, 0, ${x2} ${y2} Z`}
              style={{
                ...wedge, fill: e.fill,
                transform: `rotate(${240 + i * 60}deg)`
              }}
              onClick={(e: any) => {
                // erases previous transform !!!
                e.target.style.transform = 'scale(1.2)'
                console.log('t', this, e.target)
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
