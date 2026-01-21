import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./components/layout/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Login from "./pages/Login";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login Page */}
        <Route path='/login' element={<Login />} />

        {/* Admin Dashboard Layout */}
        <Route path='/' element={<DashboardLayout />}>
          <Route index element={<Navigate to='/dashboard' />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='users' element={<Users />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
