import React, { useContext } from 'react';
import { Route, Routes, Navigate, Outlet } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import Auth from './components/Auth/Auth';
import AuthContext from './store/auth-context';
import Admin from './pages/Admin/Admin';

function App() {
  const authCtx = useContext(AuthContext);
  let userRole = authCtx.role;
  const ProtectedRoute = ({ isAllowed, redirectPath = '/auth', children }) => {
    if (!isAllowed) {
      return <Navigate to={redirectPath} replace />;
    }
    return children ? children : <Outlet />;
  };
  return (
    <>
      {/* <Routes>
        <Route path="/" index element={<Auth />} />
        {!authCtx.isLoggedIn && <Route path="/auth" element={<Auth />} />}
        {authCtx.isLoggedIn && <Route path="/home" element={<Home />} />}
        {authCtx.isLoggedIn && <Route path="/search" element={<Search />} />}
        <Route path="/admin" element={<Admin />} />
      </Routes> */}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes> */}

      <Routes>
        <Route index element={<Auth />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/admin" element={<Admin />} />

        <Route
          element={
            <ProtectedRoute isAllowed={userRole === 'customer'}>
              <Route path="/home" element={<Home />} />
              <Route path="/search" element={<Search />} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute isAllowed={userRole === 'admin'}>
              <Admin />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
