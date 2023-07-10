import React from 'react';
import { View, Text, Image } from 'react-native';
import { useSelector } from 'react-redux';

const FavoriteContactList = () => {
  const favoriteContacts = useSelector(state =>
    state.contacts.filter(contact => contact.favorite)
  );

  return (
    <View>
      <Text>Favorite Contact List</Text>
      {favoriteContacts.map(contact => (
        <View key={contact.id}>
          <Image
            source={require('../images/default-profile-pic.jpg')}
            style={{ width: 50, height: 50 }}
          />
          <Text>{contact.name}</Text>
        </View>
      ))}
    </View>
  );
};

export default FavoriteContactList;
