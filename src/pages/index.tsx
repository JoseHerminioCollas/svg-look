import * as React from "react"

const b = {
  fill: 'red',
}
const c = {
  fill: 'green',
  width: 15,
  height: 15
}
const d = {
  fill: 'yellow',
}
const container = {
  margin: '50px',
  background: 'rgba(255, 255, 55, 0.5)',
}
const A = ({ x, y }: any) => (
  <rect x={x} y={y} style={c} />
)
const B = ({ x, y, radius }: any) => (
  <circle fill="#F7941E" stroke="#231F20" stroke-width="1"
    cx={x} cy={y} r="5" opacity="0.6" />
)
const IndexPage = () => {
  return (
    <main>
      <div style={container}>
        <svg version="1.1" viewBox="0 0 100 100">
          <A x="0" y="0" />
          <svg x="10%" y="10%" width="90%" height="90%" >
            <rect x="0" y="0" width="90%" height="100%" fill="red" />
            {[...Array(12)].map((v, i) => {
              const radius = 35
              const inc = 30
              const circleStart = 195
              const circlePlacement = circleStart + i * inc
              const offsetX = 40
              const offsetY = 40
              const x = Math.cos(circlePlacement * (Math.PI / 180)) * radius + offsetX
              const y = Math.sin(circlePlacement * (Math.PI / 180)) * radius + offsetY

              return (<B x={x} y={y} radius={radius} />)
            })}
          </svg>
        </svg>
      </div>

    </main>
  )
}

export default IndexPage
