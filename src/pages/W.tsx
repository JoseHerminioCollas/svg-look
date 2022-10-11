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
 const a: any = []
 const [s, setS] = React.useState(1)
 const [s1, setS1] = React.useState(1)
 const [s2, setS2] = React.useState(1)
// const states = [s, s1, s2]
const states2: any = [[s, setS], [s1, setS1], [s2, setS2]]
// states.push(s)
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

        a.push(<circle cx={12}  cy={12} r={100} fill="blue" />)
        return (
          <>
            {/* {a} */}
            <path d={`M 0 0 
              L 90 0 
              A 100 100, 0, 0, 0, ${x2} ${y2} Z`}
              style={{
                ...wedge, fill: e.fill,
                transform: `rotate(${240 + i * 60}deg) scale(${states2[i][0]})`
              }}
              data-id = {i}
              onClick={(e: any) => {
                // setS1(1)
                // setS(2)
                // states[0](1)
                // erases previous transform !!!
                // document.querySelector('path').style.transform = 'scale(0.2)' 
                // e.target.style.transform = 'scale(1.2)' + `rotate(${240 + i * 60}deg)`
                // a.forEach((e: any)  => {
                //   e.fill = 'red' 
                // });
                states2[0][1](1)
                states2[1][1](1)
                states2[2][1](1)
                states2[e.target.dataset.id][1](1.4)
                console.log('t',  e.target.dataset.id )
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
