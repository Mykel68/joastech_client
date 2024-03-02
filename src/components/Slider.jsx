import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "../assets/hero.jpg";

function Slider() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          src={Image}
          alt="First slide"
          className="d-block w-100"
          style={{ width: 660, height: "90vh" }}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={Image}
          alt="Second slide"
          className="d-block w-100"
          style={{ width: 660, height: "90vh" }}
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={Image}
          alt="Third slide"
          className="d-block w-100"
          style={{ width: 660, height: "90vh" }}
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
