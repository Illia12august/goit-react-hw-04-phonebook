import { nanoid } from 'nanoid';
import { Formik } from 'formik';

import * as Yup from 'yup';
import {
  AddContactBtn,
  Container,
  InputEl,
  StyledError,
  StyledForm,
} from './AddContact.styled';
const contactValidation = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too short!')
    .max(70, 'Too Long!')
    .required('Required'),
  phoneNumber: Yup.string()
    .min(9, 'Too short!')
    .max(9, 'Too Long!')
    .required('Required'),
});
export const AddContact = ({addContact}) => {

  const addContactInComponent = (values, act) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.phoneNumber,
    };
    addContact(newContact);

    act.resetForm();
  };
  return (
    <Formik
      initialValues={{ name: '', phoneNumber: '' }}
      onSubmit={addContactInComponent}
      validationSchema={contactValidation}
    >
      {({ isSubmitting }) => (
        <StyledForm>
          <Container>
            <label>Name</label>
            <InputEl type="text" name="name" placeholder="Ariana Grande" />
            <StyledError name="name" />
            <label>Number</label>
            <InputEl type="text" name="phoneNumber" placeholder="123-45-67" />
            <StyledError name="phoneNumber" />
            <AddContactBtn type="submit" disabled={isSubmitting}>
              Add contact
            </AddContactBtn>
          </Container>
        </StyledForm>
      )}
    </Formik>
  );
};
