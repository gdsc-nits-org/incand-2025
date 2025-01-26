"use client";

import { useState, useRef } from "react";
import UserDashboard from "../../../components/User_Dashboard/user";
import AdminDashboard from "../../../components/Admin_Dasboard/admin";

const Dashboard = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  return <>{isAdmin ? <AdminDashboard /> : <UserDashboard />}</>;
};

export default Dashboard;
