import { useAuth } from 'hooks/useAuth';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

const ResetPasswordForm: React.FC = () => {
  const { register, errors, handleSubmit } = useForm();
  const auth = useAuth();
  const router = useRouter();
  const onSubmit = (data: { email: string }) => {
    auth.sendPasswordResetEmail(data.email);
    router.push('/login');
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
        <span>
          <button type="submit">Send reset link</button>
        </span>
      </div>
    </form>
  );
};

export default ResetPasswordForm;
