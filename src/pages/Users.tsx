import { UserTable } from '@/components/UserTable';
import { vendorColumns } from '@/components/vendor/vendor.columns';
import { useUsers } from '@/hooks/useUser';

export const Users = () => {
  const { data } = useUsers();

  return (
    <div>
      <UserTable
        columns={vendorColumns}
        data={data}
      />
    </div>
  );
};
