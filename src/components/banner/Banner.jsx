import "../banner/banner.scss";
function Banner({ image, titre }) {
      return (
            <div className='banner'>
                  <img src={image} alt='banner' />
                  <div>
                        <h1>{titre}</h1>
                  </div>
            </div>
      );
}

export default Banner;
