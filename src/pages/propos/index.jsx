import Banner from "../../components/banner/Banner";
import Collapse from "../../components/collapse/Collapse";
import bannerPropos from "../../images/bannerPropos.png";
import "../propos/propos.scss";
function Propos() {
      return (
            <div className='propos'>
                  <Banner image={bannerPropos} titre={""} />
                  <div className='volets'>
                        <Collapse
                              title={"Fiabilité"}
                              info={
                                    "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes"
                              }
                        />
                        <Collapse
                              title={"Respect"}
                              info={
                                    "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme"
                              }
                        />
                        <Collapse
                              title={"Service"}
                              info={
                                    "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme"
                              }
                        />
                        <Collapse
                              title={"Sécurité"}
                              info={
                                    "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes"
                              }
                        />
                  </div>
            </div>
      );
}

export default Propos;
