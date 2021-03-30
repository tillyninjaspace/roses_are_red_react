import React from 'react';
import Spinner from 'react-bootstrap/Spinner'
const Loading = () => {

    return (
        <div className="loading">
            
            {/* <img className="loadingImage" src="loading_slo.gif"/>
            <p>
            <span className="loadingText" style={{background: "grey", color: "white", padding: "8px", borderRadius: "5px"}}>Loading Posts...</span>
            </p> */}
              <div className="loadingImage">
                  <p>BULLETIN BOARD IS LOADING ...</p>
              <Spinner animation="border" variant="primary">
                <span className="sr-only">Loading...</span>

             </Spinner>
             </div>
        </div>
    )
}

export default Loading;