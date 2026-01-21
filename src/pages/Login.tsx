const Login: React.FC = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-slate-100'>
      <div className='bg-white p-8 rounded shadow w-full max-w-sm'>
        <h2 className='text-xl font-bold mb-4'>Admin Login</h2>

        <input className='w-full border p-2 mb-3 rounded' placeholder='Phone' />

        <input
          type='password'
          className='w-full border p-2 mb-4 rounded'
          placeholder='Password'
        />

        <button className='w-full bg-blue-600 text-white py-2 rounded'>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
