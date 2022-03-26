import { Link } from "react-router-dom";

function Nav(props) {
  //inline style for the nav tag
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    border: "3px solid black",
    padding: "8px",
    width: "90%",
    margin: "auto",
  };

  return (
    <header>
      <nav 
      // style={navStyle}
      >
        <img alt="logo" src="https://i.imgur.com/cLYvXem.jpg" sizes="width:100px "/>
        <Link to="/">
          <div>Nabila<span>Digourdi</span></div>
        </Link>
        <Link to="/about">
          <div>ABOUT</div>
        </Link>
        <Link to="/projects">
          <div>My Work</div>
        </Link>
        <Link to="/contact">
          <div>Contact</div>
        </Link>
        <a href='https://docs.google.com/document/d/1UqOyAENDdGjgEj7gWPphDqqN91m81c1ZTzC2hKQfc3k/'> Resume
         </a>
      </nav>
    </header>
  );
}

export default Nav;