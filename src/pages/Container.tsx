import * as React from "react"
import A from './A'
import C from './C'
import D from './D'
import W from './W'

const container = {
  position: 'relative'
}
const arc = {
  fill: "none", strokeWidth: "30", stroke: "gray"
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect style={{ ...bg }} />
        {/* move the group to the middle of the area, calculate based on 0, 0 in middle
                    change origin of coords to middle
                */}
        <g style={{
          transform: 'translate( 50%, 85%)',
          fill: 'none'
        }}>
          {/* <rect style={{ ...bg, width: 200, height: 100 }} /> */}
          {/* arc */}
          <path id="abc" d="M -100 0
                    A 100 100 0 0 1 100  0"
            style={arc} />
          <text dy="3" style={{ fill: 'black' }}>
            <textPath alignment-baseline="top" xlinkHref="#abc" startOffset="23%">
              Lorum Ipsum Dolor Sit
            </textPath>
          </text>
          <C />
          <W />
        </g>
      </svg>
    </div>
  )
}

export default Container
