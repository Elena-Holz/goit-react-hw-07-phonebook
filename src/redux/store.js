import { configureStore } from '@reduxjs/toolkit'

import contactsSlice from "./contacts/contactsSlice";
import filterReducer from "./filter/filterSlice";

const store = configureStore({
    reducer: {
        contacts: contactsSlice,
    filter: filterReducer,
    }
});

export default store;

