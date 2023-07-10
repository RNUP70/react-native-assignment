import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BudgetEntryForm from '../components/BudgetEntryForm';
import BudgetEntryListing from '../components/BudgetEntryListing';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="BudgetEntryForm"
          component={BudgetEntryForm}
          options={{title: 'Budget Entry'}}
        />
        <Stack.Screen
          name="BudgetEntryListing"
          component={BudgetEntryListing}
          options={{title: 'Budget Entry Listing'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
