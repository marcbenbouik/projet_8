import "../collapse/collapse.css";
import { useState } from "react";
// import { faChevronDown } from '@fortawesome/fontawesome-free';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
// import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Collapse({ title, info }) {
      const [display, setDisplay] = useState(false);
      const [animate, setAnimate] = useState(false);
      console.log(display);

      function HandleClick() {
            setAnimate(true);
            setDisplay(!display);
      }

      return (
            <div className='volet'>
                  <div className='fixe'>
                        <h2>{title}</h2>
                        <div
                              className={`${
                                    animate
                                          ? display
                                                ? "rotateDown"
                                                : "rotateUp"
                                          : null
                              }`}
                        >
                              <i onClick={HandleClick}>
                                    <FontAwesomeIcon icon={faChevronUp} />
                              </i>
                        </div>
                  </div>
                  <div
                        className={`slide-in ${
                              animate
                                    ? display
                                          ? "visible"
                                          : "unvisible"
                                    : null
                        }`}
                  >
                        {Array.isArray(info) ? (
                              <ul className='content'>
                                    {info.map((equip) => {
                                          return <li key={equip}>{equip}</li>;
                                    })}
                              </ul>
                        ) : (
                              <div className='content'>{info}</div>
                        )}
                  </div>
            </div>
      );
}

export default Collapse;
