import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "../../styles/carousel.css";
function Carousel(props) {
      const pictures = props.picture;
      const [picNumber, setNumber] = useState(0);
      const lastPic = pictures.length - 1;
      return (
            <div className='carousel'>
                  <FontAwesomeIcon
                        icon={faChevronLeft}
                        size='5x'
                        style={{ color: "#FFFF" }}
                        className='chevronGauche'
                        onClick={() =>
                              picNumber === 0
                                    ? setNumber(lastPic)
                                    : setNumber(picNumber - 1)
                        }
                  />
                  <img src={pictures[picNumber]} alt='' />
                  <FontAwesomeIcon
                        icon={faChevronRight}
                        size='5x'
                        style={{ color: "#FFFF" }}
                        className='chevronDroit'
                        onClick={() =>
                              picNumber < lastPic
                                    ? setNumber(picNumber + 1)
                                    : setNumber(0)
                        }
                  />
            </div>
      );
}

export default Carousel;
