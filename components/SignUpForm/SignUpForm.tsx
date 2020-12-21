import { auth, db } from 'config/firebase';
import { useForm } from 'react-hook-form';

interface SignUpData {
  name: string;
  email: string;
  password: string;
}

const createUser = (user) => {
  return db
    .collection('users')
    .doc(user.uid)
    .set(user)
    .then(() => {
      console.log('Success');
    })
    .catch((error) => {
      console.log(error);
    });
};

const signUp = ({ name, email, password }: SignUpData) => {
  return auth
    .createUserWithEmailAndPassword(email, password)
    .then((response) => {
      return createUser({ uid: response.user.uid, email, name });
    })
    .catch((error) => {
      return { error };
    });
};

const SignUpForm: React.FC = () => {
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = (data: SignUpData) => {
    return signUp(data).then((user) => {
      console.log(user);
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          ref={register({
            required: 'Please enter an name',
          })}
        />
        {errors.password && <div>{errors.password.message}</div>}
      </div>
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
          <button type="submit">Sign up</button>
        </span>
      </div>
    </form>
  );
};

export default SignUpForm;
