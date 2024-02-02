import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Button, Title, P, Input } from './RegistrationForm.styled';

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

export const RegistrationForm = () => {
  return (
    <div>
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
          // same shape as initial values
          console.log(values);
        }}
      >
        <Form>
          <label>
            <Input name="mame" placeholder="Enter your name" />
          </label>

          <label>
            <Input name="email" placeholder="jane@acme.com" type="email" />
          </label>
          <label>
            <Input name="password" placeholder="Password" type="password" />
          </label>
          <Button type="submit">Sign Up</Button>
        </Form>
      </Formik>
    </div>
  );
};
