
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { HomeScreen } from "./components/ui/HomeScreen";
import { UserScreen } from "./components/ui/UserScreen";
import { RoleScreen } from "./components/ui/RoleScreen";
import { Navigation } from "./components/ui/Navigation";
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div >      
      <Header />
      <BrowserRouter>
      <Navigation></Navigation>
        {/* <nav>
          <ul>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/User">User</Link></li>
            <li><Link to="/Role">Role</Link></li>
          </ul>
        </nav> */}
        <Routes>
          <Route path="/Home" element={<HomeScreen />} />
          <Route path="/User" element={<UserScreen />} />
          <Route path="/Role" element={<RoleScreen />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;