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

  return (
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
              { text: 'A' },
              { text: 'B' },
              { text: 'C' },
              { text: 'D' },
            ]}
            groupRadius={150} />
          <W />
        </g>
        <circle fill="blue" cx="50%" cy="85%" r="40" opacity="1" id="c" />
      </svg>
    </div>
  )
}

export default Container
