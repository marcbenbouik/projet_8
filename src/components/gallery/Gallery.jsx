import { Link } from "react-router-dom";
import { listeAnnonces } from "../../datas/listeAnnonces";
import "./gallery.scss";

function Gallery() {
      return (
            <div className='annonceGrid'>
                  {listeAnnonces.map((annonce) => {
                        const id = annonce.id;

                        return (
                              <Link to={`/logement/${id}`} key={annonce.id}>
                                    <div className='annonceItem'>
                                          <img
                                                src={annonce.cover}
                                                alt='annonce'
                                          />
                                          <p>{annonce.title}</p>
                                          <div className='gradient'></div>
                                    </div>
                              </Link>
                        );
                  })}
            </div>
      );
}

export default Gallery;
