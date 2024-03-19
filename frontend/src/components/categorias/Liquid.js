import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Product from "../Product";
import { Row, Col, Form } from "react-bootstrap";
import { Carousel, Image } from "react-bootstrap";
import Loader from "../Loader";
import Message from "../Message";
import { listLiquid } from "../../actions/productActions";
//Liquid
function Liquid() {
  const dispatch = useDispatch();

  const productTopRated = useSelector((state) => state.productTopRated);
  const { error, loading, products } = productTopRated;

  useEffect(() => {
    dispatch(listLiquid());
  }, [dispatch]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <div>
      <h1>Bases y delineadores</h1>
      <Row className="h">
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <div className="products">
              <Product product={product} />
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Liquid;
