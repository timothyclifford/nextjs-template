import { useAuth } from 'hooks/useAuth';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const useRequireAuth = () => {
  const auth = useAuth();
  const router = useRouter();
  console.log(auth);
  useEffect(() => {
    if (!auth.user) {
      router.push('/login');
    }
  }, [auth, router]);

  return auth;
};
