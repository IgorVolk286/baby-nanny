import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, Title, P, Input, Wrap, ErrorMes } from './login.styled';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { setUser } from '../../redux/UserSlice';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

const SignInFormSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(2, 'Too short! At least 2').required('Required'),
});

export const Login = () => {
  const dispatch = useDispatch();
  const logIn = values => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(userCredential => {
        const user = userCredential.user;
        toast.success(`Welcome ${user.displayName}`);

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
        validationSchema={SignInFormSchema}
        onSubmit={values => logIn(values)}
      >
        <Form>
          <label>
            <Input name="email" placeholder="jane@acme.com" type="email" />
            <ErrorMes name="email" component="div" />
          </label>
          <label>
            <Input name="password" placeholder="Password" type="password" />
            <ErrorMes name="password" component="div" />
          </label>
          <Button type="submit">Log in</Button>
        </Form>
      </Formik>
    </Wrap>
  );
};
