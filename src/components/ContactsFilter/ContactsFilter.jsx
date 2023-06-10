import React from 'react';

import css from '../ContactForm/ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';

export const ContactsFilter = () => {
  const distpach = useDispatch();
  return (
    <label htmlFor="filter" className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        name="filter"
        title="Please enter a name to find your contacts"
        onChange={event => distpach(filterContacts(event.target.value))}
      />
    </label>
  );
};
