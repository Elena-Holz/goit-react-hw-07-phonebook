export const getContacts = store => store.contacts;
export const getFilteredContacts = ({filter, contacts }) => {   
    if (!filter) {
        return contacts ;
    }

    const registerFilter = filter.toLocaleLowerCase();
    const filterContacts = contacts.filter(({ name }) => {
      const registerName = name.toLocaleLowerCase();
      const result = registerName.includes(registerFilter);
      return result;
    })

    return filterContacts;
}