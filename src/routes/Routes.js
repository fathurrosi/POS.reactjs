// import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import PrivateRoute from './PrivateRoute';
// import Home from '../pages/Home';
// import Login from '../pages/Login';
// import Dashboard from '../pages/Dashboard';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { HomeScreen } from "./components/HomeScreen";
import { UserScreen } from "./components/UserScreen";
import { RoleScreen } from "./components/RoleScreen";
import { Navigation } from "./components/Navigation";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>

    // <BrowserRouter>
    //       <Navigation></Navigation>            
    //         <Routes>
    //           <Route path="/Home" element={<HomeScreen />} />
    //           <Route path="/User" element={<UserScreen />} />
    //           <Route path="/Role" element={<RoleScreen />} />
    //         </Routes>
    //       </BrowserRouter>
    
  );
};

export default AppRoutes;