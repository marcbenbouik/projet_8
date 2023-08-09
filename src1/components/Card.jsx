import { Link } from "react-router-dom";
import { listeAnnonces } from "../datas/listeAnnonces";
import "../styles/annoncesItem.css";

function AnnoncesGrid() {
      return (
            <div className='annonceGrid'>
                  {listeAnnonces.map((annonce) => {
                        const id = annonce.id; // Déclaration de la variable id

                        return (
                              <Link to={`/logement/${id}`} key={annonce.id}>
                                    <div className='annonceItem'>
                                          <img
                                                src={annonce.cover}
                                                alt='annonce'
                                          />
                                          <p>{annonce.title}</p>
                                    </div>
                              </Link>
                        );
                  })}
            </div>
      );
}

export default AnnoncesGrid;
