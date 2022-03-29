import { Link } from "react-router-dom";
import '../styles/Nav.scss';

function Nav(props) {
//   //inline style for the nav tag
//   const navStyle = {
//     display: "flex",
//     justifyContent: "space-around",
//     border: "3px solid black",
//     padding: "8px",
//     width: "90%",
//     margin: "auto",
//   };

  return (
    <header>
      <nav className="navbar" >

        <img className="image" alt="logo" src="https://i.imgur.com/cLYvXem.jpg"/>
        <div  classsName="link">
        <Link  to="/">
          Nabila<span>Digourdi</span>
        </Link>
        <Link  to="/about">
          ABOUT
        </Link>
        <Link  to="/projects">
          My Work
        </Link>
        <Link  to="/contact">
          Contact
        </Link>
        <a  href='https://docs.google.com/document/d/1UqOyAENDdGjgEj7gWPphDqqN91m81c1ZTzC2hKQfc3k/'> 
          Resume
         </a>
         </div>
      </nav>
    </header>
  );
}

export default Nav;