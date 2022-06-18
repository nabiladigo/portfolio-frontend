import { Link } from "react-router-dom";
import '../styles/Nav.scss';
//  need to work on nav bar more dropdown and why did I use a instead of Link
function Nav(props) {
    return (
        <header className="header">
            <div className="logo">
                <img className="image" alt="logo" src="https://i.imgur.com/cLYvXem.jpg"/>
                <a href="/">Nabila<span>Digourdi</span></a>
            </div>
            <nav className="navbar" >
                <ul className="link">
                    <li> <a className="list" href="/home">HOME</a>
                        <ul>
                            <li>
                                <a className="list" href="/about">ABOUT</a>
                            </li>
                            <li>
                                <a className="list" href="/projects">My Work</a>
                            </li>               
                            <li>
                                <a className="list" href="/contact">Contact</a>
                            </li>               
                            <li>
                                <a className="list" href='https://docs.google.com/document/d/1_GA1E4VOXxVk1QKdjY5BP3_uWV0lvLBOCfoTxEh146I'>Resume</a>
                            </li> 
                            </ul>
                    </li>
                </ul>
            </nav>
            <div className="nav_toggle"></div>
        </header>
   );
}
                 
  
 
 

export default Nav;