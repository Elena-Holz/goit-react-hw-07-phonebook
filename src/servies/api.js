import axios from "axios";

const instanceContacts= axios.create({
    baseURL: "https://6357a541c26aac906f2ed568.mockapi.io/api/contacts",
    params: {
        _limit: 25,
    }
});

export const getContacts = async() => {
    const { data } = await instanceContacts.get("/");
    return data;
}

export const addContact = async(data) => {
    const {data: result} = await instanceContacts.post("/", data);
    return result;
}

export const deleteContact = async(id) => {
    const {data} = await instanceContacts.delete(`/${id}`);
    return data;
}