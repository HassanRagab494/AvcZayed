// src/components/PrivateRoute.js
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './Hooks/useAuth'; // تأكد من وجود هذا الـ hook

const PrivateRoute = () => {
  const { user } = useAuth(); // افترض أنك تستخدم hook للتحقق من حالة المستخدم

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
