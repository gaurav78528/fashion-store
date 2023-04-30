import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OurStore from "./pages/OurStore";
import NotFound from "./pages/NotFound";
import CompareProducts from "./pages/CompareProducts";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/ResetPassword";
import SingleProduct from "./pages/SingleProduct";
import Checkout from "./pages/Checkout";
import Account from "./pages/Account";
import MyOrders from "./pages/MyOrders";
import Dashboard from "./pages/Dashboard";
import { store } from "./redux/store";
import { loadUser } from "./redux/auth/action";
import ProctectedRoute from "./components/ProctectedRoute";
import UpdatePassword from "./pages/UpdatePassword";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentSuccess from "./components/PaymentSuccess";
import AllProducts from "./pages/AllProducts";
import AddProduct from "./pages/AddProduct";

function App() {
  const [stripeapikey, setStripeapikey] = useState("");
  console.log(stripeapikey);

  async function getStripeApiKey() {
    const { data } = await axios.get(
      "http://localhost:4500/payment/stripeapikey"
    );
    setStripeapikey(data.stripeApiKey);
  }
  useEffect(() => {
    store.dispatch(loadUser());
    getStripeApiKey();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/update-password" element={<UpdatePassword />} />
          <Route path="password/forget-password" element={<ForgetPassword />} />
          <Route path="/payment/success" element={<PaymentSuccess />} />
          <Route
            path="password/reset-password/:token"
            element={
              // <ProctectedRoute>
              <ResetPassword />
              // </ProctectedRoute>
            }
          />
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/store" element={<OurStore />} />
            <Route path="/store/:id" element={<SingleProduct />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/profile"
              element={
                <ProctectedRoute>
                  <Account />
                </ProctectedRoute>
              }
            />
            <Route path="/my-orders" element={<MyOrders />} />
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            {/* <Route
              path="/checkout"
              element={
                // <ProctectedRoute>
                <Checkout />
                // </ProctectedRoute>
              }
            /> */}
            {stripeapikey && (
              <Route
                path="/checkout"
                element={
                  <ProctectedRoute>
                    <Elements stripe={loadStripe(stripeapikey)}>
                      <Checkout />
                    </Elements>
                  </ProctectedRoute>
                }
              />
            )}
            <Route
              path="/admin/dashboard"
              element={
                <ProctectedRoute>
                  <Dashboard />
                </ProctectedRoute>
              }
            />
            <Route
              path="/admin/products"
              element={
                <ProctectedRoute>
                  <AllProducts />
                </ProctectedRoute>
              }
            />
            <Route
              path="/admin/product/add"
              element={
                <ProctectedRoute>
                  <AddProduct />
                </ProctectedRoute>
              }
            />
            {/* <Route
                  path="/checkout"
                  element={
                    <ProctectedRoute>
                      <Checkout />
                    </ProctectedRoute>
                  }
                /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
