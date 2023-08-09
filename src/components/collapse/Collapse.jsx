import "../collapse/collapse.scss";
import { useEffect, useRef, useState } from "react";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Collapse({ title, info }) {
      const [isExpended, setExpend] = useState(false);
      const [contentHeight, setHeight] = useState(0);
      const heightRef = useRef(null);
      useEffect(() => {
            setHeight(isExpended ? heightRef.current.scrollHeight : 0);
      }, [isExpended]);

      function handleClick() {
            setExpend(!isExpended);
      }

      return (
            <div className='collapse'>
                  <div className='collapse-header' onClick={handleClick}>
                        <h2>{title}</h2>
                        <div
                              className={
                                    "collpase-icon" +
                                    (isExpended ? "rotateDown" : "rotateUp")
                              }
                        >
                              <i>
                                    <FontAwesomeIcon icon={faChevronUp} />
                              </i>
                        </div>
                  </div>
                  <div
                        className='content'
                        ref={heightRef}
                        style={{ maxHeight: `${contentHeight}px` }}
                  >
                        {Array.isArray(info) ? (
                              <ul className='inner'>
                                    {info.map((equip) => {
                                          return <li key={equip}>{equip}</li>;
                                    })}
                              </ul>
                        ) : (
                              <div className='inner'>{info}</div>
                        )}
                  </div>
            </div>
      );
}

export default Collapse;
