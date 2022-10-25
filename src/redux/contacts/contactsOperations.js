import * as api from "servies/api.js";
import { createAsyncThunk } from "@reduxjs/toolkit";

const isCopy = ({name}, contacts) => {
    const normalizedTitle = name.toLowerCase();
  

    const result = contacts.find(item => {
        return (normalizedTitle === item.nametoLowerCase())
    });
    return Boolean(result);
}

export const fetchContacts = createAsyncThunk(
    "books/fetch",
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
    "contacts/add",
    async(data, {rejectWithValue}) => {
        try {
            const result = await api.addContact(data);
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
    {
        condition: (data, { getState }) => {
            const { contacts } = getState();
            if(isCopy(data, contacts.items)) {
                return alert(`${data.name} is already exist`)
            }
        }
    }
)

export const removeContact = createAsyncThunk(
    "contacts/remove",
    async(id, {rejectWithValue}) => {
        try {
            await api.removeContact(id);
            return id;
        } catch(error) {
            return rejectWithValue(error);
        }
    }
)