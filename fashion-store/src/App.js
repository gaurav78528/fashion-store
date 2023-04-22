import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OurStore from "./pages/OurStore";
import Blogs from "./pages/Blogs";
import NotFound from "./pages/NotFound";
import CompareProducts from "./pages/CompareProducts";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/ResetPassword";
import SingleBlog from "./pages/SingleBlog";
import SingleProduct from "./pages/SingleProduct";
import Checkout from "./pages/Checkout";
import Account from "./pages/Account";
import MyOrders from "./pages/MyOrders";
import Dashboard from "./pages/Dashboard";
import { store } from "./redux/store";
import { loadUser } from "./redux/auth/action";
import ProctectedRoute from "./components/ProctectedRoute";
import UpdatePassword from "./pages/UpdatePassword";

function App() {
  useEffect(() => {
    // console.log("loaded");
    store.dispatch(loadUser());
  }, []);
  // const x = store.dispatch(loadUser());
  // console.log({ loadUser });

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/update-password" element={<UpdatePassword />} />
          <Route path="password/forget-password" element={<ForgetPassword />} />
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
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog/:id" element={<SingleBlog />} />
            <Route path="/compare-products" element={<CompareProducts />} />
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
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="/checkout"
              element={
                <ProctectedRoute>
                  <Checkout />
                </ProctectedRoute>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
