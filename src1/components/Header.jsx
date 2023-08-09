import { Link } from "react-router-dom";
import "../styles/header.css";
import logo from "../images/logo.png";

function Header() {
      return (
            <div className='header'>
                  <div>
                        <img src={logo} alt='logo' />
                        <nav>
                              <Link to={"/"} className='link'>
                                    Acceuil
                              </Link>
                              <Link to={"/a-propos"} className='link'>
                                    A Propos
                              </Link>
                        </nav>
                  </div>
            </div>
      );
}

export default Header;
