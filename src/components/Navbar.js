import "./Navbar.css";
import logo from "../global/Img/logo.png";

export default function Navbar(){
    return (
        <nav className="grid-container">
        <div className="grid-item">
          <img className="nav-logo" src={logo} alt="logo-bild" />
        </div>
  
        <div className="grid-item">
          <ul className="links">
            <li className="links-item">
              <a className="links-item-a" href="#">
                Home
              </a>
            </li>
            <li className="links-item">
              <a className="links-item-a" href="#">
                Analys 
              </a>
            </li>
            <li className="links-item">
              <a className="links-item-a" href="#">
              Biography
              </a>
            </li>
            <li className="links-item">
              <a className="links-item-a" href="#">
                About
              </a>
            </li>
          </ul>
        </div>
  
      
      </nav>
    );
  }
