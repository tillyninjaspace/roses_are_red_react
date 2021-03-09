import React from 'react';

const Footer = () => {

    return (
        <div style={{padding: "15px", marginTop: "50px", backgroundColor: "#057BFE", borderRadius: "5px", color: "white"}}>
            <span style={{fontWeight: "bold"}}>Web App is still under development by Developer: <a style={{color: "white", textDecoration: 'underline'}}href="https://gracious-mcnulty-e733ac.netlify.app/about.html" target='_blank' alt='developer'>Tilly Wright</a></span>
            <p>Tech Stack: React, Bootstrap, Multer, Cloudinary, Node, Express, PSQL, HTML, CSS, Photoshop</p>
        </div>
    )
};

export default Footer;