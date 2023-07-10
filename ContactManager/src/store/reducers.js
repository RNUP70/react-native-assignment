import {
    ADD_CONTACT,
    UPDATE_CONTACT,
    DELETE_CONTACT,
    TOGGLE_FAVORITE,
  } from './actionTypes';
  
  const initialState = {
    contacts: [],
  };
  
  const contactReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_CONTACT:
        return {
          ...state,
          contacts: [...state.contacts, action.payload],
        };
      case UPDATE_CONTACT:
        return {
          ...state,
          contacts: state.contacts.map(contact =>
            contact.id === action.payload.id ? action.payload : contact
          ),
        };
      case DELETE_CONTACT:
        return {
          ...state,
          contacts: state.contacts.filter(contact => contact.id !== action.payload),
        };
      case TOGGLE_FAVORITE:
        return {
          ...state,
          contacts: state.contacts.map(contact =>
            contact.id === action.payload
              ? { ...contact, favorite: !contact.favorite }
              : contact
          ),
        };
      default:
        return state;
    }
  };
  
  export default contactReducer;
  