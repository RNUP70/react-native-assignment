import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

const ContactList = ({ navigation }) => {
  const contacts = useSelector(state => state.contacts);

  const navigateToAddContact = () => {
    navigation.navigate('CreateContact');
  };

  const navigateToUpdateContact = (contact) => {
    navigation.navigate('UpdateContact', { contact });
  };

  return (
    <View>
      <Text>Contact List</Text>
      {contacts.map(contact => (
        <TouchableOpacity
          key={contact.id}
          onPress={() => navigateToUpdateContact(contact)}
        >
          <Image
            source={require('../images/default-profile-pic.jpg')}
            style={{ width: 50, height: 50 }}
          />
          <Text>{contact.name}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity onPress={navigateToAddContact}>
        <Text>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ContactList;
