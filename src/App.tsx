import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/app.scss";
import Customers from "./Pages/Customers";
import Dashboard from "./Pages/Dashboard";
import Help from "./Pages/Help";
import Income from "./Pages/Income";
import Product from "./Pages/Product";
import Profile from "./Pages/Profile";
import Promote from "./Pages/Promote";
import Layout from "./components/Layout";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      {/* <Routes>
        <Route index element={<Dashboard />} />
        <Route path="/product" element={<Product />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/income" element={<Income />} />
        <Route path="/promote" element={<Promote />} />
        <Route path="/help" element={<Help />} />
        <Route path="/profile" element={<Profile />} />
      </Routes> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/product" element={<Product />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/income" element={<Income />} />
          <Route path="/promote" element={<Promote />} />
          <Route path="/help" element={<Help />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
