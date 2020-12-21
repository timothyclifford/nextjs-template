import Button from 'components/Button/Button';
import { useAuth } from 'hooks/useAuth';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

interface LoginData {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const { register, errors, handleSubmit } = useForm();
  const auth = useAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const onSubmit = (data: LoginData) => {
    setIsLoading(true);
    setError(null);
    return auth.signIn(data).then((response) => {
      setIsLoading(false);
      response.error ? setError(response.error) : router.push('/dashboard');
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="email">Email address</label>
        <div>
          <input
            id="email"
            type="email"
            name="email"
            ref={register({
              required: 'Please enter an email',
              pattern: {
                value: /^[^@\s]+@[^@\s\.]+\.[^@\.\s]+$/,
                message: 'Not a valid email',
              },
            })}
          />
          {errors.email && <div>{errors.email.message}</div>}
        </div>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <div>
          <input
            id="password"
            type="password"
            name="password"
            ref={register({
              required: 'Please enter a password',
              minLength: {
                value: 6,
                message: 'Should have at least 6 characters',
              },
            })}
          />
          {errors.password && <div>{errors.password.message}</div>}
        </div>
      </div>
      <div>
        <span>
          <Button title="Login" type="submit" isLoading={isLoading} />
        </span>
      </div>
      {error?.message && (
        <div>
          <span>{error.message}</span>
        </div>
      )}
      <div>
        <div>
          <Link href="/reset-password">
            <a href="#">Forgot your password?</a>
          </Link>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
