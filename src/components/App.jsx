// import { useEffect } from "react";
// import { nanoid } from "nanoid";
import ContactsItem from 'components/ContactsItem/ContactsItem.jsx';
import FormAddPhone from 'components/FormAddPhone/FormAddPhone.jsx';
import Filter from "components/Filter/Filter.jsx";
import css from 'components/App.module.css'
import PropTypes from "prop-types";

import { useSelector, useDispatch } from "react-redux";
import { addContact, removeContact } from 'redux/contacts/contactsSlice.js';
import { setFilter } from "redux/filter/filterSlice";
import { getFilter } from "redux/filter/filterSelector";
import { getFilteredContacts } from "redux/contacts/contactsSelector";


export function App() {
  
  const contacts = useSelector(getFilteredContacts);
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();


const onAddContact = (contact) => {
     if (isCopy(contact)) {
        return alert(`${contact.name} is already in contacts`);
    }
    
  const action = addContact(contact);
        dispatch(action);
    
  }

  
  const onRemoveContact = (id) => {
       const action = removeContact(id);
        dispatch(action);

}
  
     const handelChange = (event) => {
       const { value } = event.target;
       dispatch(setFilter(value));
  }

   const isCopy = ({ name }) => {
    const result = contacts.find((item) => item.name === name);
    return result;
  }

  
 return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        
        <h2 className={css.title}>Phonebook</h2>
        <FormAddPhone onSubmit={onAddContact} />
        <Filter filter={filter} handelChange={handelChange} />
        <h2 className={css.title}>Contacts</h2>
        {contacts && <ContactsItem items={contacts} removeContact={onRemoveContact}/>}
      </div>
    );
      }
 

App.propTypes = {

    contacts: PropTypes.array,
    filter: PropTypes.string,
    
}