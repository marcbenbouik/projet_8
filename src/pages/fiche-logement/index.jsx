import { Navigate, useParams } from "react-router-dom";
import { listeAnnonces } from "../../datas/listeAnnonces";
import Collapse from "../../components/collapse/Collapse";
import Tags from "../../components/tags/Tags.";
import Rating from "../../components/rating/Rating";
import Title from "../../components/title/Title";
import Host from "../../components/host/host";
import "../../styles/logement.css";
import Carousel from "../../components/carousel/Carousel";

function Logement() {
      const { id } = useParams();
      const annonceActuelle = listeAnnonces.filter(
            (annonce) => annonce.id === id
      );
      const annoncement = annonceActuelle[0];
      if (annoncement === undefined) {
            return <Navigate to={"/error"} replace={true} />;
      }
      return (
            <div className='centrage'>
                  <div className='logement'>
                        <Carousel picture={annonceActuelle[0].pictures} />
                        <article>
                              <div className='logementTitle'>
                                    <Title
                                          title={annonceActuelle[0].title}
                                          locate={annonceActuelle[0].location}
                                    />
                                    <Tags tags={annonceActuelle[0].tags} />
                              </div>
                              <div className='logementHost'>
                                    <Host host={annonceActuelle[0].host} />
                                    <Rating
                                          rating={annonceActuelle[0].rating}
                                    />
                              </div>
                        </article>
                        <div className='logementCollapse'>
                              <div className='child'>
                                    <Collapse
                                          title={"Description"}
                                          info={annonceActuelle[0].description}
                                    />
                              </div>
                              <div className='child'>
                                    <Collapse
                                          title={"Equipements"}
                                          info={annonceActuelle[0].equipments}
                                          classname='child'
                                    />
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default Logement;
