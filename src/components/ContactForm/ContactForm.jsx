import { FilterContacts } from 'components/Filter/Filter';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
const { TextField, Button } = require('@mui/material');

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const onInputChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const onHandleSubmit = e => {
    e.preventDefault();

    const newContact = {
      name: name,
      number: number,
    };

    if (name === '' && number === '') {
      alert('contact can`t be an empty field, put something else');
      return;
    }

    dispatch(addContact(newContact));
    resetForm();
  };
  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <form onSubmit={onHandleSubmit}>
        <TextField
          variant="filled"
          label={'name'}
          value={name}
          onChange={onInputChange}
          name={'name'}
          type={'text'}
          id="name"
        ></TextField>
        <br />
        <TextField
          variant="filled"
          label={'number'}
          value={number}
          onChange={onInputChange}
          name={'number'}
          type={'tel'}
          id="number"
        >
          number
        </TextField>
        <Button type="submit" variant="contained">
          Add contact
        </Button>
      </form>
      <FilterContacts></FilterContacts>
    </>
  );
};
