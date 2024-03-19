import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Product from "../Product";
import { Row, Col, Form } from "react-bootstrap";
import { Carousel, Image } from "react-bootstrap";
import Loader from "../Loader";
import Message from "../Message";
import { listHighlighter } from "../../actions/productActions";

function Highlighter() {
  const dispatch = useDispatch();

  const productTopRated = useSelector((state) => state.productTopRated);
  const { error, loading, products } = productTopRated;

  useEffect(() => {
    dispatch(listHighlighter());
  }, [dispatch]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <div>
      <h1>Iluminadores</h1>
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

export default Highlighter;
