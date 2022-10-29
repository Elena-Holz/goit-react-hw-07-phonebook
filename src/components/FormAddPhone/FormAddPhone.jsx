import PropTypes from "prop-types";
import { addContact } from "redux/contacts/contactsOperations.js";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { nanoid } from "nanoid";
import css from 'components/FormAddPhone/FormAddPhone.module.css'

import { getFilteredContacts } from "redux/contacts/contactsSelector";

export default function FormAddPhone() {
    const dispatch = useDispatch();
     const contacts = useSelector(getFilteredContacts);

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    
    const nameId = nanoid();
    const numberId = nanoid();
   
    const handelChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'name':
                return setName(value);
            case 'number':
                return setNumber(value);
            
            default:
                return;
        }
       }
      
    const isCopy = ({ name }) => {
    const result = contacts.find((item) => item.name === name);
    return result;
  }
    
     const onAddContact = (contact) => {
     if (isCopy(contact)) {
        return alert(`${contact.name} is already in contacts`);
    }
    
    const action = addContact(contact);
        dispatch(action);
    
  }
   
    const handelSabmit = (event) => {
        event.preventDefault();
        onAddContact({ name, number });
        setName((name) => name = '');
        setNumber((number) => number = '');
        }


return (
                <form onSubmit={handelSabmit}>
                    <div className={css.formGrup}>
                        <label className={css.titleInput} htmlFor="name">Name</label><br />
                        <input className={css.input}
                            id={nameId}
                            type="text"
                            value={name}
                            name='name'
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                            onChange={handelChange}
                        />
                    </div>
                    <div className={css.formGrup}>
                        <label className={css.titleInput} htmlFor="number">Number</label><br />
                        <input className={css.input}
                            id={numberId}
                            type="tel"
                            name='number'
                            value={number}
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                            onChange={handelChange}
                            />
                    </div>
                    <button className={css.button}>Add contact</button>
                </form>
    )
    
    }



FormAddPhone.propTypes = {

    name: PropTypes.string,
    number: PropTypes.string,
    
}