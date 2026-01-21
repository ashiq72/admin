const Navbar: React.FC = () => {
  return (
    <div className='h-14 bg-white shadow flex items-center justify-between px-6'>
      <h3 className='font-semibold'>Dashboard</h3>

      <div className='flex items-center gap-3'>
        <span className='text-sm'>Admin</span>
        <div className='w-8 h-8 rounded-full bg-slate-300' />
      </div>
    </div>
  );
};

export default Navbar;
