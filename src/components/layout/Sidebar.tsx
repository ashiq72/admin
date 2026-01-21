import { NavLink } from "react-router-dom";

const Sidebar: React.FC = () => {
  const linkClass = "block hover:text-blue-400";

  return (
    <div className='w-64 min-h-screen bg-slate-900 text-white p-4'>
      <h2 className='text-2xl font-bold mb-8'>Admin</h2>

      <ul className='space-y-4'>
        <li>
          <NavLink to='/dashboard' className={linkClass}>
            Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink to='/users' className={linkClass}>
            Users
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
