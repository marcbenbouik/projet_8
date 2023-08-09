import blackLogo from "../../images/LOGO.svg";
import "../footer/footer.css";

function Footer() {
      return (
            <div className='footer'>
                  <div>
                        <img src={blackLogo} alt='kosa logo' />
                        <p>© 2020 Kasa. All rights reserved</p>
                  </div>
            </div>
      );
}

export default Footer;
