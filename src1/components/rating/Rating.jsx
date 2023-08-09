import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/rating.css";

function Rating(props) {
      const rating = props.rating;
      const ratingArray = [];
      const whiteStarArray = [];
      for (let i = 0; i < rating; i++) {
            ratingArray.push(i);
      }
      const whiteStar = 5 - rating;
      for (let i = 0; i < whiteStar; i++) {
            whiteStarArray.push(i);
      }
      return (
            <div className='rating'>
                  {ratingArray.map((element) => {
                        return (
                              <div key={element} className='redStar'>
                                    <FontAwesomeIcon
                                          icon={faStar}
                                          style={{ color: "#ff6060" }}
                                          size='xl'
                                    />
                              </div>
                        );
                  })}
                  {whiteStarArray.map((element) => {
                        return (
                              <div key={element} className='WhiteStar'>
                                    <FontAwesomeIcon
                                          icon={faStar}
                                          style={{ color: "#e3e3e3" }}
                                          size='xl'
                                    />
                              </div>
                        );
                  })}
            </div>
      );
}

export default Rating;
