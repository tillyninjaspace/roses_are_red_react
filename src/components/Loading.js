import React from 'react';
import Spinner from 'react-bootstrap/Spinner'
const Loading = () => {

    return (
        <div className="loading">
              <div className="loadingImage">
                <p>FEATURED BOARD IS LOADING...</p>
                <span>It may take up to 30 sections to load. Thanks for your patience.</span>
                <Spinner animation="border" variant="primary">
                <span className="sr-only">Loading...</span>
                </Spinner>
             </div>
        </div>
    )
}

export default Loading;