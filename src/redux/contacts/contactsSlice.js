// import { createSlice } from "@reduxjs/toolkit";
// import { nanoid } from "nanoid";

// const contactsSlice = createSlice({
//     name: "contacts",
//     initialState: [],
//     reducers: {
//         addContact: {
//             reducer: (store, {payload}) => {
//                 store.push(payload);
//             },
//             prepare: (data) => {
//                 return {
//                     payload: {
//                         ...data,
//                         id: nanoid()
//                     }
//                 }
//             }
//         },
//         removeContact: (store, {payload}) => store.filter(({id}) => id !== payload)
//     }
// })



// export const { addContact, removeContact } = contactsSlice.actions;

// export default contactsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "redux/contacts/contactsOperations.js";

const initialState = {
    items: [],
    loading: false,
    error: null,
}

const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    extraReducers: {
        [fetchContacts.pending]: (store) => {
            store.loading = true;
        },
        [fetchContacts.fulfilled]: (store, {payload}) => {
            store.loading = false;
            store.items = payload;
        },
        [fetchContacts.rejected]: (store, {payload}) => {
            store.loading = true;
            store.error = payload;
        },
        [addContact.pending]: (store) => {
            store.loading = true;
        },
        [addContact.fulfilled]: (store, {payload}) => {
            store.loading = false;
            store.items.push(payload)
        },
        [addContact.rejected]: (store, { payload }) => {
            store.loading = false;
            store.error = payload;
        },
        [deleteContact.pending]: (store) => {
            store.loading = false;
        },
        [deleteContact.fulfilled]: (store, { payload }) => {
            store.loading = false;
            store.items = store.items.filter(item => item.id !== payload)
            
        },
        [deleteContact.rejected]: (store, {payload}) => {
            store.loading = false;
            store.error = payload;
        },
    }
})

export default contactsSlice.reducer;