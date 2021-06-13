import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Slide = () => {
    return (
        <div>
             <style type="text/css">
              {`
              .carousel-item {
                background-color: darkgray;
                color: white;
              }
              `}
            </style>

          <Carousel fade style={{
            backgroundColor: "black", display: "flex",
            justifyContent: "space-between"
            }}>
          <Carousel.Item interval={1000}
          >
            <img 
              className="d-block w-100"
              src="https://res.cloudinary.com/ninjaspacecontent/image/upload/c_crop,h_1200,w_1000/v1615413582/bv8d4irles2jypa1gp9u.jpg"
              alt="First slide"
            />
            <Carousel.Caption className="blurFont">
              <h3>Read blogs about San Luis Obispo</h3>
              <p>Read <a href="http://sanluisobispomom.com/blog.php" target="_blank">about San Luis Obispo.</a>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img 
              className="d-block w-100"
              src="https://res.cloudinary.com/ninjaspacecontent/image/upload/c_crop,h_1200,w_1000/v1614990890/jjubh4gkol9qasv4f0ko.jpg"
              alt="Second slide"
            />
          <Carousel.Caption className="blurFont">
            <h3>Events All Over San Luis Obispo County</h3>
            <p>Find <a href="http://www.sanluisobispomom.com/family-friendly-events.php" target="_blank">events in San Luis Obispo</a>.</p>
          </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img 
              className="d-block w-100"
              src="https://res.cloudinary.com/ninjaspacecontent/image/upload/c_crop,e_vibrance:20,h_1200,w_1000/v1615493206/gqgiuqz8e9m0jizpdpuq.jpg"
              alt="Third slide"
            />
            <Carousel.Caption className="blurFont">
              <h3>Restaurants in SLO County</h3>
              <p>See <a href="http://www.sanluisobispomom.com/family-friendly-restaurants.php" target="_blank">restaurant pictures</a>.</p>
            </Carousel.Caption>
          </Carousel.Item>
          </Carousel>
        </div>
    )
}

export default Slide;