import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import ProductList from './component/ProductList';
import InventoryManagementComponent from './component/InventoryManagementComponent';
//import AuthenticationComponent from './component/AuthenticationComponent';
import SearchComponent from './component/SearchComponent';
// import DashboardComponent from './component/DashboardComponent';
import AdminPanelComponent from './component/AdminPanelComponent';
import Order from './component/Order';
// import Settings from './component/Settings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ProductList" element={<ProductList />} />
        <Route path="/inventory-management" element={<InventoryManagementComponent />} />
        {/* <Route path="/authentication" element={<AuthenticationComponent />} /> */}
        <Route path="/search" element={<SearchComponent />} />
        {/* <Route path="/dashboard" element={<DashboardComponent />} /> */}
        <Route path="/admin-panel" element={<AdminPanelComponent />} />
        <Route path="/order" element={<Order />} />
        {/* <Route path="/settings" element={<Settings />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
