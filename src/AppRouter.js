import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import Payment from './components/payment/Payment';


function AppRouter() {
  return (
    <Router>
      <Routes> {/* Use Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;