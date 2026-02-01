import { useEffect, useState } from 'react';
import type { Vendor } from './vendor.types';

import { DataTable } from '@/components/data-table';
import { vendorColumns } from './vendor.columns';
import { DataTableSkeleton } from '../DataTableSkeleton';

export const VendorTable = () => {
  const [data, setData] = useState<Vendor[]>([]);
  const [loading, setLoading] = useState(true);
  console.log('erer', loading);
  console.log('data', data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // 🔥 simulate API
        setTimeout(() => {
          setData([]);
          setLoading(false);
        }, 1500);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <DataTableSkeleton />;

  if (!data.length) {
    return (
      // <div className='text-center py-10 text-muted-foreground'>
      //   No Vendors Found
      // </div>
      <DataTableSkeleton />
    );
  }

  return (
    // <DataTable
    //   columns={vendorColumns}
    //   data={data}
    // />
    <DataTableSkeleton />
  );
};
