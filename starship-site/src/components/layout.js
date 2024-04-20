import * as React from "react"
import { Link } from "gatsby"
import "../styles/styles.css" // Updated import path

const Layout = ({ children }) => {
  return (
    <div className="container">
      <header>
        <h1>Starship Manufacturing Co.</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  )
}

export default Layout
