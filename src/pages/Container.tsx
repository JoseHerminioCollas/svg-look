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
const wedge = {
    fill: "blue", stroke: "black", strokeWidth: "2",
    transform: 'rotate(-0deg)'
}
const q = {
    fill: "green", strokeWidth: "2", stroke: "black"
}
const r = {
    fill: "none", strokeWidth: "30", stroke: "gray"
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
const RD = Math.PI / 180;
const { cos, sin } = Math;
const rad = -60
const cSize = 90
const x = cos(rad * RD) * cSize
const y = sin(rad * RD) * cSize
const t = -42

const Container = () => {
    const d = `M10,50   c0,${t}   70,${t}   70,0 s10,10 10,10`
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
                    <path d={`M 0 0 
                    L 90 0 
                    A 100 100, 0, 0, 0, ${x} ${y} Z`}
                        style={{ ...wedge, fill: 'green' }}
                    />
                    <path d={`M 0 0 
                    L 90 0 
                    A 100 100, 0, 0, 0, ${x} ${y} Z`}
                        style={{ ...wedge, transform: 'rotate(-60deg)' }}
                    />
                    <path d={`M 0 0 
                    L 90 0 
                    A 100 100, 0, 0, 0, ${x} ${y} Z`}
                        style={{ ...wedge, transform: 'rotate(-120deg)' }}
                    />
                    {/* place text! */}
                    {[1, 2, 3].map((e, i) => {
                        const rad = 210 +  i * 60
                        const cSize = 60
                        const x = cos(rad * RD) * cSize
                        const y = sin(rad * RD) * cSize
                        return (<circle cx={x} cy={y} r="10"
                            fill="purple"
                        ></circle>)
                    })}
                    <text y="0" x="0" style={{ fill: 'black' }}>
                        ABC
                        <textPath alignment-baseline="top"  >
                            AAAAAAAAAAAAAA
                        </textPath>
                    </text>
                </g>
            </svg>
        </div>
    )
}

export default Container
