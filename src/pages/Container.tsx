import * as React from "react"
import A from './A'
import C from './C'

const container = {
    // margin: '50px',
    position: 'relative'
}
const c = {
    fill: 'red',
}
const d = {
    fill: "rgba(255, 155, 155, 0.5)",
}
const p = {
    fill: "blue", stroke: "black", strokeWidth: "1",
}
const q = {
    fill: "green", strokeWidth: "2", stroke: "black"
}
const r = {
    fill: "none", strokeWidth: "32", stroke: "gray"
}
const bg = {
    fill: 'red',
    x: 0,
    y: 0,
    width: '100%',
    height: '100%',
}
const t = -42
const Container = () => {
    const d = `M10,50   c0,${t}   70,${t}   70,0 s10,10 10,10`
    return (
        <div style={container}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
                <rect style={bg} />
                {/* wedge */}
                <path d="M 80 80
                    A 45 45, 0, 0, 0, 125 125
                    L 125 80   Z"
                    style={q}
                />
                {/* // x y */}

                <path d="M  25 5 
                    A 45 45, 0, 0, 1, 75 55
                    L 25 55   Z"
                    style={q}
                />
                {/* arc */}
                <path id="abc" d="M  50 150
                    A 60 60 0 0 1 250 150"
                    style={r} />
                <text dy="3">
                    <textPath alignment-baseline="top" xlinkHref="#abc" startOffset="23%">
                        Dangerous Curves Ahead
                    </textPath>
                </text>
                <A x="0" y="0" style={c} />
                <C />
                <g width="30" style={{ transform: 'translate(50%,  50px )' }} >
                    <text x="0" y="0" >
                        xxxxxxxxxxxxxxxxx
                    </text>
                    <path d="M  25 5 
                    A 45 45, 0, 0, 1, 75 55
                    L 25 55   Z"
                    style={q}
                />
                    <rect x="0" y="0" style={{ width: '100%', height: 10, fill: 'red'}} />

                </g>
              </svg>
            <div id="d" style={
                {
                    position: 'absolute',
                    transformOrigin: 'center center',
                    left: '50%',
                    top: '33%',
                    borderRadius: '50%',
                    border: '2px solid black',
                    width: 30,
                    height: '10%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>xxx sss ccc</div>
        </div>
    )
}

export default Container
