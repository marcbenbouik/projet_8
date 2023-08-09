import "../../styles/deroulant.css";
import { useState } from "react";
// import { faChevronDown } from '@fortawesome/fontawesome-free';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Collapse({ title, info }) {
      const [display, setDisplay] = useState(false);
      const [animate, setAnimate] = useState(false);

      return (
            <div className='volet'>
                  <div className='fixe'>
                        <h2>{title}</h2>
                        <div>
                              {display ? (
                                    <i
                                          onClick={() => {
                                                setDisplay(false);
                                                setAnimate(true);
                                          }}
                                    >
                                          <FontAwesomeIcon icon={faChevronUp} />
                                          {/* fleche bas */}
                                    </i>
                              ) : (
                                    <i
                                          onClick={() => {
                                                setDisplay(true);
                                                setAnimate(true);
                                          }}
                                    >
                                          <FontAwesomeIcon
                                                icon={faChevronDown}
                                          />
                                    </i>
                              )}
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
                              <ul>
                                    {info.map((equip) => {
                                          return <li key={equip}>{equip}</li>;
                                    })}
                              </ul>
                        ) : (
                              <div>{info}</div>
                        )}
                  </div>
            </div>
      );
}

export default Collapse;
