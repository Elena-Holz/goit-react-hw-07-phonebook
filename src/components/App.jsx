import { useEffect } from "react";
// import { nanoid } from "nanoid";
import ContactsItem from 'components/ContactsItem/ContactsItem.jsx';
import FormAddPhone from 'components/FormAddPhone/FormAddPhone.jsx';
import Filter from "components/Filter/Filter.jsx";
import css from 'components/App.module.css'
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts } from "redux/contacts/contactsOperations.js";
import { getState, getFilteredContacts } from "redux/contacts/contactsSelector";


export function App() {
  
  const contacts = useSelector(getFilteredContacts);
  const {loading, error} = useSelector(getState);
  const dispatch = useDispatch();


useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch]);
  

 return (
      <div
        style={{
          // height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        
        <h2 className={css.title}>Phonebook</h2>
     <FormAddPhone />
        <Filter/>
        <h2 className={css.title}>Contacts</h2>
     {!loading && contacts.length > 0 && <ContactsItem contacts={contacts} />}
     {error && <p>oops, something went wrong</p>}
      </div>
    );
      }
 

App.propTypes = {

    contacts: PropTypes.array,
    filter: PropTypes.string,
    
}


