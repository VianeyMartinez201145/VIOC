import React from "react";
import { Carousel, Image } from "react-bootstrap";
import imagen1 from "./imagen1.png";
import imagen2 from "./imagen2.png";

function ProductCarousel() {
  // Array de productos estáticos
  const products = [
    {
      name: "Producto 1",
      price: 10.99,
      image: imagen1,
    },
    {
      name: "Producto 2",
      price: 19.99,
      image: imagen2,
    },
  ];

  return (
    <Carousel pause="hover" className="carousel">
      {products.map((product, index) => (
        <Carousel.Item key={index}>
          <Image src={product.image} alt={product.name} fluid />
          <Carousel.Caption className="carousel-caption"></Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ProductCarousel;
