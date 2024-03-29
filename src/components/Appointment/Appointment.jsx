import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Title,
  ErrorMes,
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
  phone: Yup.string().required('Enter your phone'),
  time: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  parents: Yup.string().required('Name parents is required '),
  comment: Yup.string().required('Comment must to be 10 coints'),
});

export const Appointment = ({ nany }) => {
  return (
    <Wrap>
      <Title>Make an appointment with a babysitter</Title>
      <Text>
        Arranging a meeting with a caregiver for your child is the first step to
        creating a safe and comfortable environment. Fill out the form below so
        we can match you with the perfect care partner.
      </Text>
      <Divv>
        <Img src={nany.avatar_url} alt="nany" />
        <Div>
          <P>Your nanny</P>
          <H2>{nany.name}</H2>
        </Div>
      </Divv>
      <Formik
        initialValues={{
          address: '',
          phone: '',
          childAge: '',
          time: '',
          parents: '',
          email: '',
          comment: '',
        }}
        validationSchema={AppointmentSchema}
        onSubmit={values => {
          // same shape as initial values
          // console.log(values);
        }}
      >
        <Forma>
          <label>
            <Input name="address" placeholder="Address" />
            <ErrorMes name="address" component="div" />
          </label>
          <label>
            <Input name="phone" placeholder="+380" />
            <ErrorMes name="phone" component="div" />
          </label>
          <label>
            <Input name="childAge" placeholder="Child's age" />
            <ErrorMes name="childAge" component="div" />
          </label>
          <label>
            <Input name="time" placeholder="00:00" type="time" />
            <ErrorMes name="time" component="div" />
          </label>
          <label>
            <InputOne name="parents" placeholder="Father's or mother's name" />
            <ErrorMes name="parent" component="div" />
          </label>

          <label>
            <InputOne name="email" placeholder="jane@acme.com" type="email" />
            <ErrorMes name="email" component="div" />
          </label>

          <label>
            <InputAria name="comment" placeholder="Comment" />
            <ErrorMes name="comment" component="div" />
          </label>

          <Button type="submit">Send</Button>
        </Forma>
      </Formik>
    </Wrap>
  );
};
