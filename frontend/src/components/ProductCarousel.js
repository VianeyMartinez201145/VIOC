import React from "react";
import { Carousel, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import App from "../App";

import imagen1 from "./imagen1.png";
import imagen2 from "./imagen2.png";
import imagen3 from "./imagen3.png";
import imagen4 from "./imagen4.png";
import imagen5 from "./imagen5.png";
import imagen6 from "./imagen6.png";

function ProductCarousel() {
  // Array de productos estáticos
  const products = [
    {
      name: "Liquid",
      image: imagen1,
      route: "/Liquid",
    },
    {
      name: "Labiales",
      image: imagen2,
    },
    {
      name: "Producto 2",
      image: imagen6,
    },
    {
      name: "Producto 2",
      image: imagen3,
    },
    {
      name: "Producto 2",
      image: imagen5,
    },
  ];

  return (
    <Carousel pause="hover" className="carousel">
      {products.map((product, index) => (
        <Carousel.Item key={index}>
          <Image
            className="carousel1"
            src={product.image}
            alt={product.name}
            href={product.route}
            fluid
          />
          <Carousel.Caption className="carousel-caption"></Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ProductCarousel;
