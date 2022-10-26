export const getContacts = ({contacts}) => contacts.items;
export const getState = ({contacts}) => ({loading: contacts.loading, error: contacts.error});
export const getFilteredContacts = ({filter, contacts }) => {   
    if (!filter) {
        return contacts.items;
    }

    const registerFilter = filter.toLocaleLowerCase();
    const filterContacts = contacts.items.filter(({ name }) => {
      const registerName = name.toLocaleLowerCase();
      const result = registerName.includes(registerFilter);
      return result;
    })
  
    return filterContacts;
}