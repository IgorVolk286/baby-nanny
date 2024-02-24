import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Button, Title, P, Input, Wrap } from './login.styled';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { setUser } from '../../redux/UserSlice';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
const SignInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export const Login = () => {
  const dispatch = useDispatch();
  const logIn = values => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(userCredential => {
        const user = userCredential.user;
        toast.success(`Welcome ${user.displayName}`);
        console.log(user);
        const newUser = {
          id: user.uid,
          token: user.accessToken,
          email: user.email,
          name: user.displayName,
        };
        dispatch(setUser(newUser));
      })
      .catch(error => {
        toast.error('Wron email or password');
      });
  };

  return (
    <Wrap>
      <Title>Log In</Title>
      <P>
        Welcome back! Please enter your credentials to access your account and
        continue your babysitter search.
      </P>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={SignInSchema}
        onSubmit={values => logIn(values)}
      >
        <Form>
          <label>
            <Input name="email" placeholder="jane@acme.com" type="email" />
          </label>
          <label>
            <Input name="password" placeholder="Password" type="password" />
          </label>
          <Button type="submit">Log in</Button>
        </Form>
      </Formik>
    </Wrap>
  );
};
