import Banner from "../../components/Banner";
import AnnoncesGrid from "../../components/Card";
import "../../styles/home.css";
import banner from "../../images/banner.png";
function Home() {
      return (
            <div className='home'>
                  <Banner
                        image={banner}
                        titre={"Chez vous, partout et ailleurs"}
                  />
                  <AnnoncesGrid />
            </div>
      );
}

export default Home;
