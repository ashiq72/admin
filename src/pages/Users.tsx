import { UserTable } from '@/components/UserTable';
import { columns } from '@/components/Columns';
import { useUsers } from '@/hooks/useUsers';

export const Users = () => {
  const { data } = useUsers();

  return (
    <div>
      <UserTable
        columns={columns}
        data={data}
      />
    </div>
  );
};
