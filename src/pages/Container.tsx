import * as React from "react"
import A from './A'
import C from './C'
import D from './D'

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
    fill: "blue", stroke: "black", strokeWidth: "5",
}
const q = {
    fill: "green", strokeWidth: "2", stroke: "black"
}
// const r = {
//     fill: "none", strokeWidth: "32", stroke: "gray"
// }
const bg = {
    fill: 'red',
    x: 0,
    y: 0,
    width: '100%',
    height: '100%',
}
const RD = Math.PI / 180;
const { cos, sin } = Math;
const rad = -60
const cSize = 100
const x = cos(rad * RD) * cSize
const y = sin(rad * RD) * cSize

const t = -42
// {x} {y}
const Container = () => {
    const d = `M10,50   c0,${t}   70,${t}   70,0 s10,10 10,10`
    return (
        <div style={container}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
                <A x="0" y="0" style={c} />
                <C />
                <g style={{ transform: 'translate(150px, 200px)' }}>
                    <rect style={{ ...bg, width: 200, height: 100 }} />
                    <path d={`M 0 0 
                    L 100 0 
                    A 85 85, 0, 0, 0, ${x} ${y}  Z`}
                        style={p}
                    />
                </g>3
                <circle cx={x} cy={y} r="10" fill="purple" />
            </svg>
            <D />
        </div>
    )
}

export default Container
