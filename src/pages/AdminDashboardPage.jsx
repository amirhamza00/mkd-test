import React from "react";
import Dashboard from "./dashboard/Dashboard";
import Header from "./Header/Header";

const AdminDashboardPage = () => {
  const dateFilter = {
    width: "418px",
    height: "56px",

    background: "#1D1D1D",
    borderRadius: "16px",
  };
  return (
    <section className="dashboard-section">
      <Header />
      <Dashboard/>
    </section>
  );
};

export default AdminDashboardPage;
