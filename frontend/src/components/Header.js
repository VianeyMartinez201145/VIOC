import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import SearchBox from "./SearchBox";
import { logout } from "../actions/userActions";
import { listProducts } from "../actions/productActions";

import Otros from "./categorias/Otros";
import Lipstick from "./categorias/Lipstick";
import Liquid from "./categorias/Liquid";
import Pencil from "./categorias/Pencil";
import Powder from "./categorias/Powder";
import Palette from "./categorias/Palette";
import Cream from "./categorias/Cream";
import Mineral from "./categorias/Mineral";
import LipStain from "./categorias/LipStain";
import BBCC from "./categorias/BBCC";
import LipGloss from "./categorias/LipGloss";
import Concealer from "./categorias/Concealer";
import Highlighter from "./categorias/Highlighter";
import Contour from "./categorias/Contour";
import Gel from "./categorias/Gel";

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
              <NavDropdown title="Productos" id="products">
                <LinkContainer to="/Lipstick">
                  <NavDropdown.Item>Labiales</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/Liquid">
                  <NavDropdown.Item>Bases y delineadores</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/Pencil">
                  <NavDropdown.Item>Lapices</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/Powder">
                  <NavDropdown.Item>Rubores</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/Palette">
                  <NavDropdown.Item>Paletas de sombras</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/Cream">
                  <NavDropdown.Item>Cremas</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/Mineral">
                  <NavDropdown.Item>Polvos</NavDropdown.Item>
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
                  <NavDropdown.Item>Correctores</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/Highlighter">
                  <NavDropdown.Item>Iluminadores</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/Contour">
                  <NavDropdown.Item>Contorneadores</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/Gel">
                  <NavDropdown.Item>Gel</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/Otros">
                  <NavDropdown.Item>Otros</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>

              <NavDropdown title="Marcas" id="products">
                <LinkContainer to="/Nyx">
                  <NavDropdown.Item>NYX</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/Revlon">
                  <NavDropdown.Item>Revlon</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/Benefit">
                  <NavDropdown.Item>Benefit</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/Clinique">
                  <NavDropdown.Item>Clinique</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/Fenty">
                  <NavDropdown.Item>Fenty Beauty</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/Dior">
                  <NavDropdown.Item>Dior</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/Maybelline">
                  <NavDropdown.Item>Maybelline</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/ELF">
                  <NavDropdown.Item>E.L.F.</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/Loreal">
                  <NavDropdown.Item>L'oreal</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>

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
