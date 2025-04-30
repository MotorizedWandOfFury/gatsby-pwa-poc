import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
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
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const doclistStyles = {
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  display: `inline-block`,
  marginBottom: 24,
  marginRight: 12,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative" as "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

const IndexPage: FC<PageProps> = () => {
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
      <p>This is new text to test that updates get pushed</p>
      <img
        alt="cat picture 2"
        src={catPicture}
      />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
