import React from "react";

const Navbar = () => {
  return (
    <nav>
      <img src="#" alt="BookStore Logo" className="logo"/>
      <ul className="links">
        <li><a href="#" className="book-link">BOOKS</a></li>
        <li><a href="#" className="Categories-link">CATEGORIES</a></li>
      </ul>
      <div className="user-logo"><img src="#" alt="user logo"/></div>
    </nav>
  )
}

export default Navbar