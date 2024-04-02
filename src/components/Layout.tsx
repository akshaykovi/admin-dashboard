import AdminSidebar from "../components/AdminSidebar";
import React from "react";
import { Outlet } from "react-router-dom";
import MainContent from "./MainContent";
import Header from "./Header";

export default function Layout() {
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <div className="main-dashboard">
        <Header />
        <div>{<Outlet />}</div>
      </div>
    </div>
  );
}
