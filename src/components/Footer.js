import React from 'react';

const Footer = () => {

    return (
        <div style={{padding: "15px", marginTop: "20px", backgroundColor: "darkgray", borderRadius: "5px"}}>
            <span style={{fontWeight: "bold"}}>Web App is still under development by Developer: <a style={{color: "white", textDecoration: 'underline'}}href="https://gracious-mcnulty-e733ac.netlify.app/about.html" target='_blank' alt='developer'>Tilly Wright</a></span>
            <p style={{ color: "white"}}>Tech Stack: React, Bootstrap, Multer, Cloudinary, Jsonwebtoken, Node, Express, PSQL, HTML, CSS and Google Fonts</p>
        </div>
    )
};

export default Footer;