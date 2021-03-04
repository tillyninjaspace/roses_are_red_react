import React from 'react';

const Loading = () => {


    return (
        <div className="loading">
            
            <img src="loading_slo.gif"/>
            <p>
            <span style={{background: "grey", color: "white", padding: "8px", borderRadius: "5px"}}>Loading Posts ...</span>
            </p>

        </div>
    )
}

export default Loading;