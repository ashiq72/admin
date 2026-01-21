const Dashboard: React.FC = () => {
  return (
    <div>
      <h1 className='text-2xl font-bold mb-4'>Dashboard</h1>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <div className='bg-white p-6 rounded shadow'>Users: 120</div>
        <div className='bg-white p-6 rounded shadow'>Orders: 45</div>
        <div className='bg-white p-6 rounded shadow'>Revenue: ৳12,000</div>
      </div>
    </div>
  );
};

export default Dashboard;
