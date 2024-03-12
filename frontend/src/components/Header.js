import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import SearchBox from "./SearchBox";
import { logout } from "../actions/userActions";
import {} from "../actions/productActions";
import logo from "./logo.png";
import "./styles.css";

function Header() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  const productCategories = [
    "lipstick",
    "iquid",
    "Pencil",
    "Powder",
    "Palette",
    "Cream",
    "Mineral",
    "Lip Stain",
    "BB Cream o CC Cream",
    "Lip Gloss",
    "Concealer",
    "Highlighter",
    "Contour",
    "Gel",
    "Otros",
  ];

  return (
    <header>
      <Navbar
        className="navbar-dar"
        bg="white"
        variant="dark"
        expand="lg"
        collapseOnSelect
      >
        <Container>
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
              <NavDropdown title="Productos" id="products">
                {productCategories.map((category, index) => (
                  <LinkContainer
                    key={index}
                    to={`/api/products/${category.toLowerCase()}`}
                  >
                    <NavDropdown.Item>{category}</NavDropdown.Item>
                  </LinkContainer>
                ))}
              </NavDropdown>

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
              <LinkContainer to="/login">
                <Nav.Link>
                  <i></i>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>
                  <i></i>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i>Carrito
                </Nav.Link>
              </LinkContainer>

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
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
    </header>
  );
}

export default Header;
