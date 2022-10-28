import { useSelector, useDispatch } from "react-redux";
import { deleteContact} from "redux/contacts/contactsOperations.js";
// import { setFilter } from "redux/filter/filterSlice";
// import { getFilter } from "redux/filter/filterSelector";
import { getFilteredContacts } from "redux/contacts/contactsSelector";


import css from 'components/ContactsItem/ContactsItem.module.css'
import PropTypes from "prop-types";

function ContactsItem() {

    const contacts = useSelector(getFilteredContacts);
    const dispatch = useDispatch();
    
      const onDeleteContact = (id) => {
       const action = deleteContact(id);
        dispatch(action);
}
    
    const elements = contacts.map(({ name, number, id }) => {
        return <li className={css.listItem} key={id}>{name}: {number}
            <span className={css.deleteItem} onClick={() => onDeleteContact(id)}>Delete</span></li>
    })
        return (
           <>
            <ol>{elements}</ol>
        </>
        )
}

export default ContactsItem 

ContactsItem.defaultProps = {
    items: []
}

ContactsItem.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }))
}