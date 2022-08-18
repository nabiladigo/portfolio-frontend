// import { Link } from "react-router-dom";
import '../styles/Nav.scss';
//  need to work on nav bar more dropdown and why did I use a instead of Link
function Nav(props) {
    return (
        <nav className="header">
            {/* <div className="list"> */}
                {/* <img className="image" alt="logo" src="https://i.imgur.com/cLYvXem.jpg"/> */}
                <a href="/" className="logo">ND</a>
                <ul className="link">
                    <a className="about" href="/about">ABOUT</a>
                    <a className="project" href="/projects">My Work</a>
                    <a className="experience" href="/experience"> Experience</a>
                    <a className="contact" href="/contact">Contact</a>
                    <a className="resume" href='https://docs.google.com/document/d/1_GA1E4VOXxVk1QKdjY5BP3_uWV0lvLBOCfoTxEh146I'>Resume</a>
                </ul>
            {/* </div> */}
        </nav>
   );
}

export default Nav;