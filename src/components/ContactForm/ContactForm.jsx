import { useState } from 'react';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = ({ target: { value, name } }) => {
    if (name === 'name') setName(value);
    else if (name === 'number') setNumber(value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const existingName = contacts.some(
      item => item.name.toLowerCase() === name.toLowerCase()
    );
    const existingNumber = contacts.find(item => item.number === number);

    if (existingName) {
      return alert(`Contact "${name}" is already in contacts list`);
    } else if (existingNumber) {
      return alert(`Number "${number}" is already in contacts list`);
    }
    dispatch(addContact(name, number));

    setName('');
    setNumber('');
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit} className={css.form}>
      <label htmlFor="name" className={css.label}>
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          value={name}
          placeholder="Rosie Simpson"
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label htmlFor="number" className={css.label}>
        Number
        <input
          className={css.input}
          type="tel"
          name="number"
          value={number}
          placeholder="+380556688995"
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={css.btn}>
        Add contact
      </button>
    </form>
  );
};
