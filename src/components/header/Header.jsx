import { Link, useLocation } from "react-router-dom";
import "../header/header.scss";
import logo from "../../images/logo.png";
import { useEffect, useState } from "react";

function Header() {
      let location = useLocation();
      const [isProposUnderlined, setProposUnderlined] = useState("link");
      const [isAcceuilUnderlined, setAcceuilUnderlined] = useState("link");
      useEffect(() => {
            if (location.pathname === "/a-propos") {
                  setProposUnderlined("link underlined");
                  setAcceuilUnderlined("link");
            } else if (location.pathname === "/") {
                  setAcceuilUnderlined("link underlined");
                  setProposUnderlined("link");
            } else {
                  setAcceuilUnderlined("link");
                  setProposUnderlined("link");
            }
      }, [location]);
      return (
            <div className='header'>
                  <img src={logo} alt='logo' />
                  <nav>
                        <Link to={"/"} className={isAcceuilUnderlined}>
                              Accueil
                        </Link>
                        <Link to={"/a-propos"} className={isProposUnderlined}>
                              A Propos
                        </Link>
                  </nav>
            </div>
      );
}

export default Header;
