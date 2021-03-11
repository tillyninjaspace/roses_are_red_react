import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Slide = () => {
    return (
        <div>

<Carousel fade style={{ backgroundColor: "black", padding:"5px", margin: "5px", borderRadius: "5px", display: "flex",
justifyContent: "space-between"}}>
  <Carousel.Item>
    <img 
      className="d-block w-100"
    //   className="slideshow"
      src="https://res.cloudinary.com/ninjaspacecontent/image/upload/v1614917837/hybozwrxpbberrxc2twt.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Read the Blog</h3>
      <p>Visit <a href="http://sanluisobispomom.com">SanLuisObispoMom.com</a> and find the <a href="http://sanluisobispomom.com/blog.php">blog section.</a></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img 
      className="d-block w-100"
    //   className="slideshow"
      src="https://res.cloudinary.com/ninjaspacecontent/image/upload/v1615412536/ik2dnxssz2al1sikgqkl.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Thanks for visiting.</h3>
      <p>Find family-friendly events under the <a href="http://www.sanluisobispomom.com/family-friendly-events.php">Events section</a>.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img 
      className="d-block w-100"
    //   className="slideshow"
      src="https://res.cloudinary.com/ninjaspacecontent/image/upload/v1615067253/phravkeghplev92bxnj6.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Restaurants in SLO County</h3>
      <p>Read our <a href="http://sanluisobispo.com/restaurants.php">recommendations</a>.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

        </div>
    )
}

export default Slide;