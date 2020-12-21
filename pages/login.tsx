import Link from 'next/link';

import LoginForm from '../components/LoginForm/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <div>
      <div>
        <div>
          <h2>Log in</h2>
          <p>
            {"Don't have an account? "}
            <Link href="/signup">
              <a href="#">Sign Up</a>
            </Link>
          </p>
        </div>
        <div>
          <LoginForm></LoginForm>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
