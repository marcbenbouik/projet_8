import { Link } from "react-router-dom";
import "../header/header.scss";
import logo from "../../images/logo.png";

function Header() {
      return (
            <div className='header'>
                  <img src={logo} alt='logo' />
                  <nav>
                        <Link to={"/"} className='link'>
                              Accueil
                        </Link>
                        <Link to={"/a-propos"} className='link'>
                              A Propos
                        </Link>
                  </nav>
            </div>
      );
}

export default Header;
