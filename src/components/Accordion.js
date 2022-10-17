import React, { useState, useRef, useEffect } from "react";
import ChevronDown from "../assets/img/ChevronDown.svg";
import ChevronUp from "../assets/img/ChevronUp.svg";

const Accordion = ({ titre, content, large, numb }) => {
  const [toggle, setToggle] = useState(false);
  
  const toggleAccordion = () => {
    setToggle(!toggle);
  };
  
  let accordionRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if(!accordionRef.current.contains(e.target)){
        setToggle(false)
      }
    
    };
    document.addEventListener("mousedown", handler)

    return () =>{
      document.removeEventListener("mousedown", handler)
    }
  })
  

  return (
    
      <div key={numb} className="accordion" style={{width : {large} ? '100%' : '40%'}} >
        <div onClick={toggleAccordion} className="accordion-visible">
          <h2>{titre}</h2>
          {toggle && <img src={ChevronUp} alt="chevron down" />}
          {!toggle && <img src={ChevronDown} alt="chevron down" />}
        </div>

        <div
         
          className={toggle ? "accordion-toggle animated" : "accordion-toggle"}
        >
          {toggle && typeof content === "string" && (
            <p className="accordion-toggle-text">{content}</p>
          )}
          {toggle && typeof content === "object" && (
            <ul className="accordion-toggle-text">
              {content.map((equipement) => (
                <li key={equipement}>{equipement}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    
  );
};

export default Accordion;
