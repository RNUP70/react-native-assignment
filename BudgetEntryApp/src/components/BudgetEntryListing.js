import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { Card, Title, Paragraph } from 'react-native-paper';

const BudgetEntryListing = () => {
  const budgetEntries = useSelector((state) => state.budget.entries);

  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Content>
        <Title>{item.name}</Title>
        <Paragraph>Planned Amount: {item.plannedAmount}</Paragraph>
        <Paragraph>Actual Amount: {item.actualAmount}</Paragraph>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Budget Entry Listing</Text>
      <FlatList
        data={budgetEntries}
        renderItem={renderItem}
        keyExtractor={(item) => item.name.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  card: {
    marginBottom: 16,
  },
});

export default BudgetEntryListing;
