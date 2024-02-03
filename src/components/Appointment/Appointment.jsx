import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Title,
  P,
  Input,
  Button,
  Forma,
  Div,
  Divv,
  Img,
  H2,
  Text,
  Wrap,
  InputOne,
  InputAria,
} from './Appointment.styled';
const AppointmentSchema = Yup.object().shape({
  address: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),

  childAge: Yup.string().required('Required'),
  phone: Yup.string().required('Required'),
  time: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  parents: Yup.string().required('Required'),
  comment: Yup.string().required('Required'),
});

export const Appointment = nany => {
  const { avatar_url, name } = nany;
  return (
    <Wrap>
      <Title>Make an appointment with a babysitter</Title>
      <Text>
        Arranging a meeting with a caregiver for your child is the first step to
        creating a safe and comfortable environment. Fill out the form below so
        we can match you with the perfect care partner.
      </Text>
      <Divv>
        <Img src={avatar_url} alt="nany" />
        <Div>
          <P>Your nanny</P>
          <H2>{name}</H2>
        </Div>
      </Divv>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={AppointmentSchema}
        onSubmit={values => {
          // same shape as initial values
          console.log(values);
        }}
      >
        <Forma>
          <label>
            <Input name="address" placeholder="Address" />
          </label>
          <label>
            <Input name="phone" placeholder="+380" />
          </label>
          <label>
            <Input name="childAge" placeholder="Child's age" />
          </label>
          <label>
            <Input name="time" placeholder="00:00" type="time" />
          </label>
          <label>
            <InputOne name="parents" placeholder="Father's or mother's name" />
          </label>

          <label>
            <InputOne name="email" placeholder="jane@acme.com" type="email" />
          </label>

          <label>
            <InputAria name="comment" placeholder="Comment" />
          </label>

          <Button type="submit">Send</Button>
        </Forma>
      </Formik>
      ;
    </Wrap>
  );
};
