import React from 'react'

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <h1 className="logo">Logo service</h1>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-list__item"><a href="#" className="nav-list__link">Item 1</a></li>
            <li className="nav-list__item"><a href="#" className="nav-list__link">Item 2</a></li>
            <li className="nav-list__item"><a href="#" className="nav-list__link">Item 3</a></li>
          </ul>
        </nav>
      </header>
    )
  }
}