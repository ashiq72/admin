import { useEffect, useState } from 'react';
import { getUsers } from '@/api';

export const useUsers = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getUsers()
      .then((res) => {
        setData(res.data || res); // depends on API response
      })
      .catch(() => {
        setError('Failed to load users');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { data, loading, error };
};
