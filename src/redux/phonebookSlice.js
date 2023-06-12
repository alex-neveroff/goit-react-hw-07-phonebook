import { createSlice } from '@reduxjs/toolkit';

export const phonebookSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addReducer(state, action) {
      state.contacts.push(action.payload);
    },
    deleteReducer(state, action) {
      state.contacts = state.contacts.filter(contact => {
        return contact.id !== action.payload;
      });
    },
    filterReducer(state, action) {
      state.filter = action.payload.toLowerCase();
    },
  },
});

export const { addReducer, deleteReducer, filterReducer } =
  phonebookSlice.actions;
