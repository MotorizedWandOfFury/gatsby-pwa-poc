import * as React from "react"
import { Link, type HeadFC, type PageProps } from "gatsby"
import { FC, useEffect, useState } from "react"
import {Router} from '@reach/router'
import HomePage from "./home"
import AnotherPage from "./another_page"



const App: FC<PageProps> = () => {
  return (
    <Router>
      <HomePage path="/" />
      <AnotherPage path="/another_page" />
    </Router> 
  )
}

export default App

