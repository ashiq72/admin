import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const DashboardLayout: React.FC = () => {
  return (
    <div className='flex'>
      <Sidebar />

      <div className='flex-1 min-h-screen bg-slate-100'>
        <Navbar />
        <div className='p-6'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
