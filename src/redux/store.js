import { configureStore, combineReducers } from '@reduxjs/toolkit'

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';


import contactsSlice from "./contacts/contactsSlice";
import filterReducer from "./filter/filterSlice";

const contactsPersistConfig = {
    key: 'root',
    storage,
}

const contactsReducer = combineReducers({
  contacts: contactsSlice ,
    filter: filterReducer,
})

const persistedContactsReducer = persistReducer(contactsPersistConfig, contactsReducer);

export const store = configureStore({
    reducer:  persistedContactsReducer,
  
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})
export const persistor = persistStore(store);
export default store;

