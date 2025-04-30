import { HeadFC, Link, PageProps } from "gatsby";
import { FC } from "react";
import * as React from "react"
//@ts-ignore
import anotherKitty from "./another_kitty.jpg"

const headingStyles = {
    marginTop: 0,
    marginBottom: 64,
    maxWidth: 320,
}

const imageStyles = {
    height: 150,
    width: 160,
    marginBottom: 44
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const AnotherPage: FC<PageProps> = () => {

    return (
        <main>
            <h1 style={headingStyles}>
                Another Page
            </h1>
            <img style={imageStyles} src={anotherKitty}/>
            <Link style={linkStyle} to="/">Go Back</Link>
        </main>
    )
}

export default AnotherPage

export const Head: HeadFC = () => <title>Another Page</title>