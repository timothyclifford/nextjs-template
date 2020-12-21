import ResetPasswordForm from 'components/ResetPasswordForm/ResetPasswordForm';
import Link from 'next/link';
const ResetPasswordPage: React.FC = () => {
  return (
    <div>
      <div>
        <div>
          <h2>Reset password</h2>
          <p>
            {"Didn't forgot? "}
            <Link href="/login">
              <a href="#">Login</a>
            </Link>
          </p>
        </div>
        <div>
          <ResetPasswordForm />
        </div>
      </div>
    </div>
  );
};
export default ResetPasswordPage;
