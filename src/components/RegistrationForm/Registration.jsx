import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  Title,
  P,
  Input,
  Wrap,
  ErrorMes,
} from './RegistrationForm.styled';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import toast from 'react-hot-toast';
// import { setUser } from '../../redux/UserSlice';
// import { useDispatch } from 'react-redux';
const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export const RegistrationForm = ({ toggleModal }) => {
  const regUser = values => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(userCredential => {
        const user = userCredential.user;
        console.log(user);
        updateProfile(auth.currentUser, {
          displayName: values.name,
        });
        toast.success('Success , you can login');
      })
      .catch(error => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  return (
    <Wrap>
      <Title>Registration</Title>
      <P>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information.
      </P>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          regUser(values);
          toggleModal();
        }}
      >
        <Form>
          <label>
            <Input name="name" placeholder="Enter your name" />
            <ErrorMes name="name" component="div" />
          </label>

          <label>
            <Input name="email" placeholder="jane@acme.com" type="email" />
            <ErrorMes name="email" component="div" />
          </label>
          <label>
            <Input name="password" placeholder="Password" type="password" />
            <ErrorMes name="password" component="div" />
          </label>
          <Button type="submit">Sign Up</Button>
        </Form>
      </Formik>
    </Wrap>
  );
};
