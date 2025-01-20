
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import "./App.scss";
import Produit from "./produit";
import Client from "./client";
import Store from "./store";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/produit" element={<Produit />} />
          <Route path="/client" element={<Client />} />
          <Route path="/store" element={<Store />} />
          <Route path="/login" element={<Login />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
