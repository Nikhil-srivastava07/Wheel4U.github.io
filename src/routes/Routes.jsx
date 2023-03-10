import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
// import Services from '../pages/Services';
// import ServiceDetails from '../pages/ServiceDetails';
import CarRental from '../pages/CarRental';
import CarBooking from '../pages/CarBooking';
// import Products from '../pages/Products';
// import ProductDetails from '../pages/ProductDetails';

import Checkout from '../pages/Checkout';


import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';

const routes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />

      <Route path="/about" element={<About />} />
   
      <Route path="/car-listing" element={<CarRental />} />
      <Route path="/car-details/:id" element={<CarBooking />} />
    
      <Route path="/checkout" element={<Checkout />} />
   
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default routes;
