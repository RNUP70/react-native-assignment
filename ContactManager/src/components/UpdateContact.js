import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { updateContact } from '../store/actions';

const UpdateContact = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [landline, setLandline] = useState('');
  const [favorite, setFavorite] = useState(false);

  const { contact } = route.params;

  useEffect(() => {
    setName(contact.name);
    setMobile(contact.mobile);
    setLandline(contact.landline);
    setFavorite(contact.favorite);
  }, [contact]);

  const saveContact = () => {
    const updatedContact = {
      ...contact,
      name,
      mobile,
      landline,
      favorite,
    };

    dispatch(updateContact(updatedContact));
    navigation.goBack();
  };

  return (
    <View>
      <Text>Update Contact</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Name"
      />
      <TextInput
        value={mobile}
        onChangeText={setMobile}
        placeholder="Mobile"
      />
      <TextInput
        value={landline}
        onChangeText={setLandline}
        placeholder="Landline"
      />
      <TouchableOpacity onPress={() => setFavorite(!favorite)}>
        <Text>{favorite ? 'Unmark Favorite' : 'Mark Favorite'}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={saveContact}>
        <Text>Update</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UpdateContact;
