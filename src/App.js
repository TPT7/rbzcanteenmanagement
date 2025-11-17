import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
// import PrivateRoute from "./components/PrivateRoute";

// User pages
import Register from "./pages/user/Register";
import Login from "./pages/user/Login";
import MenuSelection from "./pages/user/MenuSelection";
import TimeSelection from "./pages/user/TimeSelection";
import Confirmation from "./pages/user/Confirmation";

// import Navbar from "./components/Navbar"; 
// Kitchen pages
import KitchenLogin from "./pages/kitchen/KitchenLogin";
import KitchenDashboard from "./pages/kitchen/KitchenDashboard";
import PrintOrder from "./pages/kitchen/PrintOrder";
import LandingPage from "./pages/landingpage";




function App() {
  return (
    <AuthProvider>
      <BrowserRouter>

        <Routes>
          {/* <Navbar />  Always visible */}
          <Route path="/" element={<LandingPage />} />

          {/* User routes */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/menu" element={<MenuSelection />} />
          <Route path="/timeselection" element={<TimeSelection />} />
          <Route path="/userconfirmation" element={<Confirmation />} />
          <Route path="/kitchenlogin" element={<KitchenLogin />} />
          <Route path="/kitchendashboard" element={<KitchenDashboard />} />
          <Route path="/printorder" element={<PrintOrder />} />

          {/* <Route
            path="/menu"
            element={<PrivateRoute role="user"><MenuSelection /></PrivateRoute>}
          /> */}
          {/* <Route
            path="/timeselection"
            element={<PrivateRoute role="user"><TimeSelection /></PrivateRoute>}
          /> */}
          {/* <Route
            path="/userconfirmation"
            element={<PrivateRoute role="user"><Confirmation /></PrivateRoute>}
          /> */}

          {/* Kitchen routes
          <Route path="/kitchenlogin" element={<KitchenLogin />} /> */}

          {/* <Route
            path="/kitchendashboard"
            element={<PrivateRoute role="kitchen"><KitchenDashboard /></PrivateRoute>}
          /> */}
          {/* <Route
            path="/printorder"
            element={<PrivateRoute role="kitchen"><PrintOrder /></PrivateRoute>}
          /> */}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
