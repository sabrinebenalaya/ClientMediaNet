import React, { useState } from "react";


import { useNavigate } from "react-router-dom";
import { enfantStyle } from "../../Constante/Style";
import "../../Constante/Style.css";
function CardOfPatient({ patientItem }) {
  const navigate = useNavigate();
  const handleNavigate = (route) => {
    navigate(route);
  };

 

  const [isHovered, setIsHovered] = useState(false);
  return (
    <div style={enfantStyle}>
      <div className="position-relative">
        <img
          style={{
            width: "150px",
            height: "150px", // Ajout de la transition pour le zoom
          }}
          className="img-fluid rounded-circle border"
          src={patientItem.image}
          alt={patientItem.prenom} 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => handleNavigate(`/index/${patientItem._id}`)}
        />
        {isHovered && (
          <div className="position-absolute top-0 start-50 translate-middle badge bg-dark">
            {patientItem.prenom} {patientItem.nom}
          </div>
        )}
      </div>
    </div>
  );
}

export default CardOfPatient;
