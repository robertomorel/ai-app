import React from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
import { JSX } from 'react/jsx-runtime';
import Dashboard from '../pages/dashboard/Dashboard';
import LoginPage from '../pages/login/LoginPage';
import GymPage from '../pages/gym/GymPage';
import BenefitsPage from '../pages/benefits/Benefits';
import SideDrawer from '../components/menu/Drawer';

export const AppRoutes = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  return (
    <>
      {isLoggedIn && <SideDrawer />}
      <Routes>
        <Route path="/" element={<LoginPage />} />;
        <Route
          path="/gym"
          element={
            <Protected isSignedIn={isLoggedIn}>
              <GymPage />
            </Protected>
          }
        />
        <Route
          path="/dashboard"
          element={
            <Protected isSignedIn={isLoggedIn}>
              <Dashboard />
            </Protected>
          }
        />
        <Route
          path="/benefits"
          element={
            <Protected isSignedIn={isLoggedIn}>
              <BenefitsPage />
            </Protected>
          }
        />
      </Routes>
    </>
  );
};

export const Protected = ({ isSignedIn, children }: any) => {
  if (!isSignedIn) {
    return <Navigate to="/" replace />;
  }
  return children;
};
export default Protected;
