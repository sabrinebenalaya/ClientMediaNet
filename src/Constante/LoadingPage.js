import React from "react";
import ReactLoading from "react-loading";

function LoadingPage() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', 
      backgroundImage: "url('asset/fond.jpg')",    backgroundRepeat: "no-repeat", 
      backgroundSize: "cover", 
  }}>
      <div>
      <ReactLoading type="bars" color="#6AE3E6"
                height={100} width={50} />
      </div>
  </div>
  )
}

export default LoadingPage