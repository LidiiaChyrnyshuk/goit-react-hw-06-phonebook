import css from './App.module.css';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactsFilter } from './ContactsFilter/ContactsFilter';
import { ContactsList } from './ContactsList/ContactsList';

export const App = () => {
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <ContactsFilter />
      <ContactsList />
    </div>
  );
};
