import React from 'react';
import Spinner from 'react-bootstrap/Spinner'
const Loading = () => {

    return (
        <div className="loading">
              <div className="loadingImage">
                <p>EVENTS BOARD IS LOADING...</p>
                <p>It may take up to 30 seconds to load. Thanks for your patience.</p>
                <Spinner animation="border" variant="primary">
                <span className="sr-only">Loading...</span>
                </Spinner>
             </div>
        </div>
    )
}

export default Loading;