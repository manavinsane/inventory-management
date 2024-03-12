import React from "react";
import ProductList from "./ProductList";
import InventoryManagementComponent from "./InventoryManagementComponent";

const AdminPanelComponent = () => {
  return (
    <div>
      <h2>Admin Panel</h2>
      <ProductList />
      <InventoryManagementComponent />
    </div>
  );
};

export default AdminPanelComponent;
