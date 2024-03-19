import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import SearchBox from "./SearchBox";
import { logout } from "../actions/userActions";
import { listProducts } from "../actions/productActions";

import Otros from "./Otros";
import Lipstick from "./Lipstick";
import Liquid from "./Liquid";
import Pencil from "./Pencil";
import Powder from "./Powder";
import Palette from "./Palette";
import Cream from "./Cream";
import Mineral from "./Mineral";
import LipStain from "./LipStain";
import BBCC from "./BBCC";
import LipGloss from "./LipGloss";
import Concealer from "./Concealer";
import Highlighter from "./Highlighter";
import Contour from "./Contour";
import Gel from "./Gel";

import logo from "./logo.png";
import "./styles.css";

function Header() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const { products } = useSelector((state) => state.productList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header>
      <Navbar
        className="navbar-dar"
        bg="white"
        variant="dark"
        expand="lg"
        collapseOnSelect
      >
        <Container container-fluid>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img
                src={logo}
                height="65"
                className="d-inline-block align-top"
                alt="Logo"
              />
              <br />
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <SearchBox />
            <Nav className="ml-auto">
              {!userInfo && (
                <LinkContainer to="/register">
                  <Nav.Link>
                    <i></i>Regístrate
                  </Nav.Link>
                </LinkContainer>
              )}
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Perfil</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Salir
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <i></i>Inicia sesión
                  </Nav.Link>
                </LinkContainer>
              )}

              <NavDropdown title="Productos" id="products">
                <LinkContainer to="/Lipstick">
                  <NavDropdown.Item>Lipstick</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/Liquid">
                  <NavDropdown.Item>Liquid</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/Pencil">
                  <NavDropdown.Item>Pencil</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/Powder">
                  <NavDropdown.Item>Powder</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/Palette">
                  <NavDropdown.Item>Palette</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/Cream">
                  <NavDropdown.Item>Cream</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/Mineral">
                  <NavDropdown.Item>Mineral</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/LipStain">
                  <NavDropdown.Item>Lip Stain</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/BBCC">
                  <NavDropdown.Item>BB Cream o CC Cream</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/LipGloss">
                  <NavDropdown.Item>Lip Gloss</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/Concealer">
                  <NavDropdown.Item>Concealer</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/Highlighter">
                  <NavDropdown.Item>Highlighter</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/Contour">
                  <NavDropdown.Item>Contour</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/Gel">
                  <NavDropdown.Item>Gel</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/Otros">
                  <NavDropdown.Item>Otros</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>

              {userInfo && userInfo.isAdmin && (
                <NavDropdown title="Admin" id="adminmenue">
                  <LinkContainer to="/admin/userlist">
                    <NavDropdown.Item>Usuarios</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/productlist">
                    <NavDropdown.Item>Productos</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/orderlist">
                    <NavDropdown.Item>Ordenes</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}

              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i>Carrito
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
    </header>
  );
}

export default Header;
