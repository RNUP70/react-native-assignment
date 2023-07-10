import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { saveBudgetEntry } from '../store/budgetSlice';

const BudgetEntryForm = ({ navigation }) => {
  const [name, setName] = useState('');
  const [plannedAmount, setPlannedAmount] = useState('');
  const [actualAmount, setActualAmount] = useState('');

  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(saveBudgetEntry({ name, plannedAmount, actualAmount }));
    setName('');
    setPlannedAmount('');
    setActualAmount('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name of Item"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Planned Amount"
        value={plannedAmount}
        onChangeText={setPlannedAmount}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Actual Amount"
        value={actualAmount}
        onChangeText={setActualAmount}
        keyboardType="numeric"
      />
      <View style={styles.buttonContainer}>
        <Button title="Save" onPress={handleSave} />
        <View style={styles.buttonSpacing} />
        <Button
          title="Show Items"
          onPress={() => navigation.navigate('BudgetEntryListing')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonSpacing: {
    width: 8,
  },
});

export default BudgetEntryForm;
