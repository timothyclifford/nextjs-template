import Link from 'next/link';
import React, { useCallback, useEffect } from 'react';

import { useAuth } from '../auth';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div style={{ padding: '40px' }}>
      <p>{`User ID: ${user ? user.uid : 'no user signed in'}`}</p>

      <p>
        <Link href="/authenticated">
          <a>Go to authenticated route</a>
        </Link>
      </p>
      <p>
        <Link href="/login">
          <a>Login</a>
        </Link>
      </p>
    </div>
  );
};

export default Dashboard;
