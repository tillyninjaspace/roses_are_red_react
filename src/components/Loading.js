import React from 'react';

const Loading = () => {

    return (
        <div className="loading">
            
            <img className="loadingImage" src="loading_slo.gif"/>
            <p>
            <span className="loadingText" style={{background: "grey", color: "white", padding: "8px", borderRadius: "5px"}}>Loading Posts...</span>
            </p>

        </div>
    )
}

export default Loading;