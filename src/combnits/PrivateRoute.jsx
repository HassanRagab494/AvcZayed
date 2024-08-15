// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

// التحقق من حالة تسجيل الدخول من localStorage أو أي وسيلة أخرى
const ProtectedRoute = ({ element: Component, ...rest }) => {
  const isAuthenticated = localStorage.getItem('auth') === 'true';

  return isAuthenticated ? Component : <Navigate to="/login" />;
};

export default ProtectedRoute;
