import * as React from "react"
import A from './A'
import C from './C'
import D from './D'
import W from './W'

const container = {
  position: 'relative'
}
const bg = {
  fill: 'red',
  x: 0,
  y: 0,
  width: '100%',
  height: '100%',
}

const Container = () => {
  const [e0, setE0] = React.useState(1)
  const [e1, setE1] = React.useState(1)
  const [e2, setE2] = React.useState(1)
  const els: any = [
    [e0, setE0],
    [e1, setE1],
    [e2, setE2]
  ]
  const wAction = (id: any) => {
    els.forEach((e: any) => (e[1](1)))
    els[id][1](2)
  }

  return (
    <>
      <div style={container}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"
          style={{ overflow: 'visible' }}
        >
          <rect style={{ ...bg }} />
          <g style={{
            transform: 'translate( 50%, 85%)',
            fill: 'none'
          }}>
            <A
              text="abc"
              radius={100}
              color="gray"
              textColor="blue"
              idName="a"
              startOffset=""
            />
            <A
              text="def"
              radius={130}
              color="blue"
              textColor="red"
              idName="b"
              startOffset=""
            />
            <C
              data={[{ text: 'A' }]}
              groupRadius={100} />
            <C
              data={[
                { text: ['A', 'B'] },
                { text: ['B', 'xxxx', 'aaaa'] },
                { text: ['C'] },
                { text: ['D'] },
              ]}
              groupRadius={120} />
            <W onClick={wAction} />
          </g>
          <circle fill="blue" cx="50%" cy="85%" r="40" opacity="1" id="c" />
        </svg>
      </div>
      <div id="abc">
        <div style={{ transform: `scale(${e0})` }}>A</div>
        <div style={{ transform: `scale(${e1})` }}>B</div>
        <div style={{ transform: `scale(${e2})` }}>C</div>
      </div>
    </>
  )
}

export default Container
