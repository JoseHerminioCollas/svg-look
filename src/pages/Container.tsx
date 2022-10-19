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
  const onMouseAEnter = () => {
    const evt = new Event('mouseover');
    const e = new MouseEvent('mouseenter', { 'bubbles': true })
    //  whateverElement.dispatchEvent(evt);    console.log('omae')
    const el = document.getElementById('tip')
    if (!el) return
    console.log('xx', el)
    el.dispatchEvent(e);
    var evObj = document.createEvent('Events');
    // evObj.initEvent( EventName, true, false );
    // ​el.dispatchEvent(evt );
    // el.style.background = 'red'
  }
  const onMouseALeave = () => {
    console.log('omal')
    const el = document.querySelector('#tip')
    if (!el) return
    // el.style.visibility = 'visible'
    // el.style.background = 'green'
  }
  return (
    <>
      <div style={container}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400"
          style={{ overflow: 'visible' }}
        >
          <rect style={{ ...bg }} />
          <g style={{
            transform: 'translate( 50%, 90%)',
            fill: 'none'
          }}>
            <A
              text="abc"
              radius={190}
              color="gray"
              textColor="blue"
              idName="a"
              startOffset=""
              onMouseAEnter={onMouseAEnter}
              onMouseALeave={onMouseALeave}
            />
            <A
              text="def"
              radius={230}
              color="blue"
              textColor="red"
              idName="b"
              startOffset=""
            />
            <C
              data={[
                { text: ['A', 'B'] },
                { text: ['B', 'xxxx', 'aaaa'] },
                { text: ['C'] },
                { text: ['D'] },
                { text: ['E'] },
                { text: ['F'] },
                { text: ['G'] },
                { text: ['I'] },
                { text: ['J'] },
                { text: ['K'] },

              ]}
              groupRadius={310} />
            <W onClick={wAction} />
          </g>
          <circle fill="blue" cx="50%" cy="85%" r="40" opacity="1" id="c" />
          <g style={{
            transform: 'translate( 50%, 50%)',
            fill: 'white',
          }}>
            <rect width="200" height="100" x="-100" y="0" />
            <rect width="30" height="30" x="-15" y="-10"
              style={{
                transform: 'rotate( 45deg )',
                transformOrigin: 'center center',
                transformBox: 'fill-box',
              }}
            />
            <circle cx="-100" cy="50" r="50" />
            <circle cx="100" cy="50" r="50" />
            <text
              dominant-baseline="middle" text-anchor="middle"
              x="10" y="45"
              style={{ fill: 'black', fontSize: '1.1em' }}
            >
              <tspan x={1} dy="-1em">a sdad asdsa</tspan>
              <tspan x={2} dy="1.1em">bfds dsfa</tspan>
              <tspan x={2} dy="1.1em"><a href="xxx">xxx</a>c</tspan>
            </text>
          </g>

        </svg>
        <div className="tip" id="tip">
          xx
        </div>
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
