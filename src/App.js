import React, { Component, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Message from "./components/Message/Message";

// Lazy Loading - Suspense, Fallback, render. This is to enhance performance.
const Support = React.lazy(() => import("./components/Support/Support"));
const Cart = React.lazy(() => import("./components/Cart/Cart"));
const Products = React.lazy(() => import("./components/Products/Products"));
const Checkout = React.lazy(() => import("./components/Checkout/Checkout"));
const ProductDetail = React.lazy(() =>
  import("./components/Products/Product/ProductDetail/ProductDetail")
);

class App extends Component {
  all_products = [
    {
      id: "1",
      name: "product_1",
      desc:
        "product_1 The radiance lives on in the Nike Air Force 1 '07 SE, the b-ball icon that puts a Valentine's Day spin on what you know best: crisp leather, bold colours and the perfect amount of flash to make you shine. The embossed words  form the Swoosh designs, while little lockets of creativity throughout reveal your love for style and detail.",
      price: 26.45,
      imgUrl:
        "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      productMsgInfo: "Limited Stock",
    },
    {
      id: "2",
      name: "product_2",
      desc:
        "product_2 The Nike Air Force 1 Shadow SE puts a playful twist on a classic b-ball design. Using a layered approach, doubling the branding and exaggerating the midsole, it highlights AF-1 DNA with a bold look. The pixelated Swoosh designs add fresh expressions to the branding, while the holographic details level up your look.",
      price: 78.25,
      imgUrl:
        "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      productMsgInfo: "Just In",
    },
    {
      id: "3",
      name: "product_3",
      desc:
        "product_3 The Nike Air Force 1 Shadow SE puts a playful twist on a classic b-ball design. Using a layered approach, doubling the branding and exaggerating the midsole, it highlights AF-1 DNA with a bold look. The pixelated Swoosh designs add fresh expressions to the branding, while the holographic details level up your look.",
      price: 123.11,
      imgUrl:
        "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      productMsgInfo: "Just In",
    },
    {
      id: "4",
      name: "product_4",
      desc:
        "product_4 The Nike Air Force 1 Shadow SE puts a playful twist on a classic b-ball design. Using a layered approach, doubling the branding and exaggerating the midsole, it highlights AF-1 DNA with a bold look. The pixelated Swoosh designs add fresh expressions to the branding, while the holographic details level up your look.",
      price: 63,
      imgUrl:
        "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      productMsgInfo: "Just In",
    },
  ];

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          {/* <Message /> */}

          <Navbar />

          <Switch>
            {/* Default Path */}
            <Route exact path="/" component={Home} />

            <Route
              exact
              path="/products"
              render={() => (
                <Suspense fallback={<div>Loading...</div>}>
                  <Products products={this.all_products} />
                </Suspense>
              )}
            />

            <Route
              exact
              path="/cart"
              render={() => (
                <Suspense fallback={<div>Loading...</div>}>
                  <Cart />
                </Suspense>
              )}
            />

            <Route
              exact
              path="/checkout"
              render={() => (
                <Suspense fallback={<div>Loading...</div>}>
                  <Checkout />
                </Suspense>
              )}
            />

            <Route
              exact
              path="/support"
              render={() => (
                <Suspense fallback={<div>Loading...</div>}>
                  <Support />
                </Suspense>
              )}
            />

            <Route
              exact
              path="/products/:prodId"
              render={() => (
                <Suspense fallback={<div>Loading...</div>}>
                  <ProductDetail products={this.all_products} />
                </Suspense>
              )}
            />

            <Route
              render={() => (
                <Container>
                  <h1>Page Not Found</h1>
                </Container>
              )}
            />
          </Switch>

          <Footer />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
