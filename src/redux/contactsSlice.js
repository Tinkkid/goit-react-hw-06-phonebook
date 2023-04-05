import { createSlice } from '@reduxjs/toolkit';

const contactsIntialState = {
  array: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsIntialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.array.push(action.payload);
      },
    },
    removeContact(state, action) {
      const index = state.array.findIndex(
        contact => contact.id === action.payload
      );
      state.array.splice(index, 1);
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
