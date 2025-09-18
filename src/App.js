

// // import { HomeScreen } from "./components/ui/HomeScreen";
// // import { UserScreen } from "./components/ui/UserScreen";
// // import { RoleScreen } from "./components/ui/RoleScreen";
// // import { Navigation } from "./components/ui/Navigation";
// import { BrowserRouter as Router } from 'react-router-dom';
// import Header from './components/layout/Header';
// import Footer from './components/layout/Footer';
// import AppRoutes from './routes/Routes';

// function App() {
//   return (
//      <Router>
//       <div>
//         <Header />
//         <AppRoutes />
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;



import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import AppRoutes from './routes/Routes';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <AppRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
