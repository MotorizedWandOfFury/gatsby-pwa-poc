import * as React from "react"
import { Link, type HeadFC, type PageProps } from "gatsby"
import { FC, useEffect, useState } from "react"
//@ts-ignore
import catPicture from "./catpicture.jpg"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const HomePage: FC<{path: string}> = () => {
  const [motherSolutionVolume, setMotherSolutionVolume] = useState<number>(0)
  const [dripRate, setDripRate] = useState<number>(0)
  const [refillTime, setRefillTime] = useState<number>(0)

  useEffect(() => {
    if (dripRate <= 0) {
      setRefillTime(0)
      return;
    }
    setRefillTime(motherSolutionVolume / dripRate)
  }, [motherSolutionVolume, dripRate])

  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        Refill Time Formula
      </h1>
      <div>
        <input type="number" value={motherSolutionVolume} onChange={(event) => { setMotherSolutionVolume(Number(event.target.value)) }} />
        <br />
        <input type="number" value={dripRate} onChange={(event) => { setDripRate(Number(event.target.value)) }} />
      </div>
      <div>
        <p style={paragraphStyles}>Refill time is: {refillTime} hours</p>
        <button onClick={() => {
          setMotherSolutionVolume(0)
          setDripRate(0)
        }}>Clear</button>
      </div>
      <Link style={linkStyle} to="/another_page">Another page</Link>
      <img
        style={{width: 200, height: 100}}
        alt="cat picture 2"
        src={catPicture}
      />
    </main>
  )
}

export default HomePage 

export const Head: HeadFC = () => <title>Home Page</title>
