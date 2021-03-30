import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Slide = () => {
    return (
        <div>
          <Carousel fade style={{
            backgroundColor: "black", padding: "5px", marginLeft: "5px", marginRight: "5px", borderRadius: "5px", display: "flex",
            justifyContent: "space-between", marginTop: "20px"
            }}>
          <Carousel.Item>
            <img 
              className="d-block w-100"
              src="https://res.cloudinary.com/ninjaspacecontent/image/upload/c_crop,h_1200,w_1000/v1615413582/bv8d4irles2jypa1gp9u.jpg"
              alt="First slide"
            />
            <Carousel.Caption className="blurFont">
              <h3>Read blogs about San Luis Obispo</h3>
              <p>Visit <a href="http://sanluisobispomom.com">SanLuisObispoMom.com</a> and read <a href="http://sanluisobispomom.com/blog.php">about San Luis Obispo.</a>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img 
              className="d-block w-100"
              src="https://res.cloudinary.com/ninjaspacecontent/image/upload/c_crop,h_1200,w_1000/v1614990890/jjubh4gkol9qasv4f0ko.jpg"
              alt="Second slide"
            />
          <Carousel.Caption className="blurFont">
            <h3>Thanks for visiting.</h3>
            <p>Find <a href="http://www.sanluisobispomom.com/family-friendly-events.php">Events in San Luis Obispo</a>.</p>
          </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img 
              className="d-block w-100"
              src="https://res.cloudinary.com/ninjaspacecontent/image/upload/c_crop,e_vibrance:20,h_1200,w_1000/v1615493206/gqgiuqz8e9m0jizpdpuq.jpg"
              alt="Third slide"
            />
            <Carousel.Caption className="blurFont">
              <h3>Restaurants in SLO County</h3>
              <p>Read <a href="http://sanluisobispo.com/restaurants.php">recommendations</a>.</p>
            </Carousel.Caption>
          </Carousel.Item>
          </Carousel>
        </div>
    )
}

export default Slide;