import Banner from "../../components/banner/Banner.jsx";
import "./home.scss";
import banner from "../../images/banner.png";
import Gallery from "../../components/gallery/Gallery";
function Home() {
      return (
            <div className='home'>
                  <Banner
                        image={banner}
                        titre={"Chez vous, partout et ailleurs"}
                  />
                  <Gallery />
            </div>
      );
}

export default Home;
