import * as api from "servies/api.js";
import { createAsyncThunk } from "@reduxjs/toolkit";

// const isCopy = ({name}, contacts) => {
//     const normalizedTitle = name.toLowerCase();
  

//     const result = contacts.find(item => {
//         return (normalizedTitle === item.name.toLowerCase())
//     });
//     return Boolean(result);
// }

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async(_, thunkApi) => {
        try {
            console.log(thunkApi);
            const data = await api.getContacts();
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
);
    
export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (data, { rejectWithValue }) => {
        try {
             console.log(data);
            const result = await api.addContact(data);
            console.log(result);
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
    // {
    //     condition: (data, { getState }) => {
    //         const { contacts } = getState();
    //         console.log(data);
    //         console.log(contacts.items);
    //         if(isCopy(data, contacts.items)) {
    //             return alert(`${data.name} is already exist`)
    //         }
    //     }
    // }
)

export const deleteContact= createAsyncThunk(
    "contacts/deleteContact",
    async(id, {rejectWithValue}) => {
        try {
            await api.deleteContact(id);
            return id;
        } catch(error) {
            return rejectWithValue(error);
        }
    }
)