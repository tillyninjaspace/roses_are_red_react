import React from 'react';
import Spinner from 'react-bootstrap/Spinner'
const Loading = () => {

    return (
        <div className="loading">
              <div className="loadingImage">
                <p>BULLETIN BOARD IS LOADING...</p>
                <Spinner animation="border" variant="primary">
                <span className="sr-only">Loading...</span>
                </Spinner>
             </div>
        </div>
    )
}

export default Loading;