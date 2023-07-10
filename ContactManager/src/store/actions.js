import {
    ADD_CONTACT,
    UPDATE_CONTACT,
    DELETE_CONTACT,
    TOGGLE_FAVORITE,
  } from './actionTypes';
  
  export const addContact = (contact) => ({
    type: ADD_CONTACT,
    payload: contact,
  });
  
  export const updateContact = (contact) => ({
    type: UPDATE_CONTACT,
    payload: contact,
  });
  
  export const deleteContact = (contactId) => ({
    type: DELETE_CONTACT,
    payload: contactId,
  });
  
  export const toggleFavorite = (contactId) => ({
    type: TOGGLE_FAVORITE,
    payload: contactId,
  });
  
