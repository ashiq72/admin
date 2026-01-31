import AdminLayout from '@/layouts/AdminLayout';
import Dashboard from '@/pages/Dashboard';
import { Users } from '@/pages/Users';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AdminLayout />}>
          <Route
            path='/'
            element={<Dashboard />}
          />
          <Route
            path='/users'
            element={<Users />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
