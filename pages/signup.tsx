import { auth } from 'config/firebase';
import Link from 'next/link';

import SignUpForm from '../components/SignUpForm/SignUpForm';

const SignUpPage: React.FC = () => {
  return (
    <div>
      <div>
        <div>
          <h2>Sign up</h2>
          <p>
            already have an account?{' '}
            <Link href="/login">
              <a href="#">Log in</a>
            </Link>
          </p>
        </div>
        <div>
          <SignUpForm></SignUpForm>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
