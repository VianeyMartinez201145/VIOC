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

import Otros from "./components/Otros";
import Lipstick from "./components/Lipstick";
import Liquid from "./components/Liquid";
import Pencil from "./components/Pencil";
import Powder from "./components/Powder";
import Palette from "./components/Palette";
import Cream from "./components/Cream";
import Mineral from "./components/Mineral";
import LipStain from "./components/LipStain";
import BBCC from "./components/BBCC";
import LipGloss from "./components/LipGloss";
import Concealer from "./components/Concealer";
import Highlighter from "./components/Highlighter";
import Contour from "./components/Contour";
import Gel from "./components/Gel";

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
