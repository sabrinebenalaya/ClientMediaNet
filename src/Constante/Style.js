export const imgSingUp = {
    backgroundImage:
    "url('asset/patientForm.jpg')",
  margingTop :"-310px",
  backgroundRepeat: "no-repeat",
    height: "500px",
    backgroundPosition: "center",
  };


  export const bloc_flex = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center", // Centrer le contenu horizontalement
    backgroundImage: "url('asset/fond.jpg')",
    backgroundRepeat: "no-repeat", 
    backgroundSize: "cover", 
    backgroundPosition: "center", 
    padding: "10px",
    minHeight: "100vh", 
    width: "100%",
    paddingLeft: "120px", // Ajouter un padding à gauche
};

const enfantsParLigne = 5; 


const largeurEnfant = `calc(100% / ${enfantsParLigne} - 20px)`; 


export const enfantStyle = {
    flexBasis: largeurEnfant,
    margin: "10px",
};
  

export const bloc_flex_spBetw = {
  display: "flex",
  justifyContent: "space-between"
};

export const styleModal = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
export const rdvstatusStyle={
  borderRadius: '8px', 
  padding: '4px',
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'center'
}
export const customBtn ={
  width: "auto !important",
  height: "auto !important"
}


export const styleCard = {
  borderRadius: "15px",
  backgroundColor: "#fff",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
  transition: "transform 0.3s ease",
  transform: "scale(1)",
};