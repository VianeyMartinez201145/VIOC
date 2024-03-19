import { Container } from "react-bootstrap";
import { HashRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";

import Otros from "./components/categorias/Otros";
import Lipstick from "./components/categorias/Lipstick";
import Liquid from "./components/categorias/Liquid";
import Pencil from "./components/categorias/Pencil";
import Powder from "./components/categorias/Powder";
import Palette from "./components/categorias/Palette";
import Cream from "./components/categorias/Cream";
import Mineral from "./components/categorias/Mineral";
import LipStain from "./components/categorias/LipStain";
import BBCC from "./components/categorias/BBCC";
import LipGloss from "./components/categorias/LipGloss";
import Concealer from "./components/categorias/Concealer";
import Highlighter from "./components/categorias/Highlighter";
import Contour from "./components/categorias/Contour";
import Gel from "./components/categorias/Gel";

import Benefit from "./components/marcas/Benefit";
import Clinique from "./components/marcas/Clinique";
import Dior from "./components/marcas/Dior";
import ELF from "./components/marcas/ELF";
import Fenty from "./components/marcas/Fenty";
import Loreal from "./components/marcas/Loreal";
import Maybelline from "./components/marcas/Maybelline";
import Nyx from "./components/marcas/Nyx";
import Revlon from "./components/marcas/Revlon";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/profile" component={ProfileScreen} />
          <Route path="/shipping" component={ShippingScreen} />
          <Route path="/placeorder" component={PlaceOrderScreen} />
          <Route path="/order/:id" component={OrderScreen} />
          <Route path="/payment" component={PaymentScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />

          <Route path="/Otros" component={Otros} />
          <Route path="/Lipstick" component={Lipstick} />
          <Route path="/Liquid" component={Liquid} />
          <Route path="/Pencil" component={Pencil} />
          <Route path="/Powder" component={Powder} />
          <Route path="/Palette" component={Palette} />
          <Route path="/Cream" component={Cream} />
          <Route path="/Mineral" component={Mineral} />
          <Route path="/LipStain" component={LipStain} />
          <Route path="/BBCC" component={BBCC} />
          <Route path="/LipGloss" component={LipGloss} />
          <Route path="/Concealer" component={Concealer} />
          <Route path="/Highlighter" component={Highlighter} />
          <Route path="/Contour" component={Contour} />
          <Route path="/Gel" component={Gel} />

          <Route path="/Benefit" component={Benefit} />
          <Route path="/Clinique" component={Clinique} />
          <Route path="/Dior" component={Dior} />
          <Route path="/ELF" component={ELF} />
          <Route path="/Fenty" component={Fenty} />
          <Route path="/Loreal" component={Loreal} />
          <Route path="/Maybelline" component={Maybelline} />
          <Route path="/Nyx" component={Nyx} />
          <Route path="/Revlon" component={Revlon} />

          <Route path="/admin/userlist" component={UserListScreen} />
          <Route path="/admin/user/:id/edit" component={UserEditScreen} />

          <Route path="/admin/productlist" component={ProductListScreen} />
          <Route path="/admin/product/:id/edit" component={ProductEditScreen} />

          <Route path="/admin/orderlist" component={OrderListScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
