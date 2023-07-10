import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { addContact } from '../store/actions';

const CreateContact = ({ navigation }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [landline, setLandline] = useState('');
  const [favorite, setFavorite] = useState(false);

  const saveContact = () => {
    const newContact = {
      id: Date.now().toString(),
      name,
      mobile,
      landline,
      favorite,
    };

    dispatch(addContact(newContact));
    navigation.goBack();
  };

  return (
    <View>
      <Text>Add New Contact</Text>
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
        <Text>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateContact;
