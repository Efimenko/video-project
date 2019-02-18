import React from 'react'
import {Link} from 'react-router-dom'

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <Link className="logo" to="/" title="Go to home page">Logo service</Link>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-list__item">
              <Link to="/popular" className="nav-list__link">Popular</Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}