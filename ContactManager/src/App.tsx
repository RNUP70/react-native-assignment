import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import ContactList from './components/ContactList';
import CreateContact from './components/CreateContact';
import UpdateContact from './components/UpdateContact';
import FavoriteContactList from './components/FavoriteContactList';
import store from './store/store';
import { Text } from 'react-native';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    // <Provider store={store}>
    //   <NavigationContainer>
    //     <Drawer.Navigator initialRouteName="ContactList">
    //       <Drawer.Screen name="ContactList" component={ContactList} />
    //       <Drawer.Screen name="FavoriteContacts" component={FavoriteContactList} />
    //     </Drawer.Navigator>
    //   </NavigationContainer>
    // </Provider>
    <Text>Hello world</Text>
  );
};

export default App;
