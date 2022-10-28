import { useEffect } from "react";
// import { nanoid } from "nanoid";
import ContactsItem from 'components/ContactsItem/ContactsItem.jsx';
import FormAddPhone from 'components/FormAddPhone/FormAddPhone.jsx';
import Filter from "components/Filter/Filter.jsx";
import css from 'components/App.module.css'
import PropTypes from "prop-types";

import { useSelector, useDispatch } from "react-redux";
import { fetchContacts, addContact, deleteContact} from "redux/contacts/contactsOperations.js";
// import { setFilter } from "redux/filter/filterSlice";
// import { getFilter } from "redux/filter/filterSelector";
import { getFilteredContacts, getState } from "redux/contacts/contactsSelector";


export function App() {
  
  const contacts = useSelector(getFilteredContacts);
  const {loading, error} = useSelector(getState);
  //   const filter = useSelector(getFilter);
  const dispatch = useDispatch();


useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch]);

const onAddContact = (contact) => {
     const action = addContact(contact);
      dispatch(action);
  }

  const onDeleteContact = (id) => {
       const action = deleteContact(id);
        dispatch(action);
}
  
  //    const handelChange = (event) => {
  //      const { value } = event.target;
  //      dispatch(setFilter(value));
  // }

  
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
        <Filter/>
      {/* <Filter filter={filter} handelChange={handelChange} /> */}
        <h2 className={css.title}>Contacts</h2>
     {!loading && contacts.length > 0 && <ContactsItem items={contacts} deleteContact={onDeleteContact} />}
     {error && <p>oops, something went wrong</p>}
      </div>
    );
      }
 

App.propTypes = {

    contacts: PropTypes.array,
    filter: PropTypes.string,
    
}


