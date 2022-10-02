import * as React from "react"
import A from './A'
import C from './C'

const container = {
    margin: '50px',
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
const t = -42
// l 0  -45 Z" "
// L 125 80 Z" 
const Container = () => {
    const d = `M10,50   c0,${t}   70,${t}   70,0 s10,10 10,10`
    return (
        <div style={container}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
                <path d="M 80 80
                    A 45 45, 0, 0, 0, 125 125
                    L 125 80   Z"
                    style={q}
                />
                <circle cx="80" cy="80" r="2" fill="yellow" />
                <circle cx="125" cy="80" r="2" fill="red" />
                <circle cx="125" cy="125" r="2" fill="blue" />

                <path d="M 10 300
            A 60 60 0 0 1 200 300
           L 200 300 Z"

                    stroke="black" fill="green" stroke-width="2" fill-opacity="0.5" />
                <circle cx="150.71" cy="170.29" r="2" fill="red" />
                <circle cx="110" cy="215" r="2" fill="red" />
                <ellipse cx="144.931" cy="229.512" rx="36" ry="60" fill="transparent" stroke="blue" />
                <ellipse cx="115.779" cy="155.778" rx="36" ry="60" fill="transparent" stroke="blue" />
            </svg>
            <svg version="1.1" viewBox="0 0 100 100">
                <path d="M 10 0
           L 110 215
           A 30 50 0 0 1 162.55 162.45
           L 172.55 152.45
           A 30 50 -45 0 1 215.1 109.9
           L 15 10"
                    stroke="black"
                    fill="green"
                    stroke-width="2"
                    fill-opacity="0.5" />
                <path d={d} style={c} />
                <A x="0" y="0" style={c} />
                <C />
                {/* radius radius rotation */}
                <path id="arc" d="M50 10 a 20 20 60 1 0 50 10" style={p} />
                <path id="arc" d="M50 50 a 10 10 0 1 0 20 20" style={p} />
            </svg>
        </div>
    )
}

export default Container
