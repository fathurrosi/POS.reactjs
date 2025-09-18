// import PrivateRoute from './PrivateRoute';
// import Home from '../pages/home';
// import Login from '../pages/login';
// import Dashboard from '../pages/Dashboard';
// import {BrowserRouter , Routes, Route } from "react-router-dom";
// import { HomeScreen } from "../pages/HomeScreen";
// import { UserScreen } from "../pages/UserScreen";
// import { RoleScreen } from "../pages/RoleScreen";


// const AppRoutes = () => {
//   return (
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/Home" element={<HomeScreen />} />
//           <Route path="/User" element={<UserScreen />} />
//           <Route path="/Role" element={<RoleScreen />} />
//           <Route
//             path="/dashboard"
//             element={
//               <PrivateRoute>
//                 <Dashboard />
//               </PrivateRoute>
//             }
//           />
//         </Routes>
//       </BrowserRouter>
//   );
// };

// export default AppRoutes;


import PrivateRoute from './PrivateRoute';
import Home from '../pages/home';
import Login from '../pages/login';
import Dashboard from '../pages/Dashboard';
import {Routes, Route } from "react-router-dom";

import { UserScreen } from "../pages/UserScreen";
import { Role } from '../pages/role';


const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<UserScreen />} />
        <Route path="/role" element={<Role />} />
        <Route path="/dashboard" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        } />
      </Routes>
  );
};

export default AppRoutes;