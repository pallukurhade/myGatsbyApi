import React  from 'react'

const Banner = ({ pageTitle, style}) => (
    <div className="banner" style={style}>
      <div className="banner-content">
      <h1 className="banner-title">{ pageTitle }</h1>
    </div>
    </div>
  );
  

export default Banner
