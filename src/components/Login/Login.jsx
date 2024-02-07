import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Button, Title, P, Input } from './login.styled';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
const SignInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export const Login = () => {
  const logIn = values => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(userCredential => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div>
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
    </div>
  );
};
