import react from 'react';
import './css/header.css';

function Header(){
  return(
    <nav className="navbar">
      <span className="logotype"></span>
      <ul className="list">
        <li><a href="" className="nav-text">WORK.</a></li>
        <li><a href="" className="nav-text">ABOUT.</a></li>
        <li><a href="" className="nav-text">CONTACT.</a></li>
      </ul>
    </nav>
  );
}

export { Header };
