import * as React from "react"
import A from './A'
import Container from './Container'
import './a.css'

const mainStyle = {
  background: 'gray',
  maxWidth: 700,
}

const IndexPage = () => {
  return (
    <main style={mainStyle}>
      <Container />
    </main>
  )
}

export default IndexPage
