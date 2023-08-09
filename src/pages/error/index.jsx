import { Link } from "react-router-dom";
import "../error/error.scss";

function Error() {
      return (
            <div className='error'>
                  <h1>404</h1>
                  <p>Oups! la page que vous demandez n'existe pas</p>
                  <Link to={"/"} className='link'>
                        Retourner sur la page d'accueil
                  </Link>
            </div>
      );
}

export default Error;
