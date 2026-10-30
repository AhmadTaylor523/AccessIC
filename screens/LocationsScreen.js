// Ahmad Taylor
// AccessIC - Sprint 1
// October 30, 2026

import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from '../styles';

const buildings = [
  { id: '1', name: 'Campus Center' },
  { id: '2', name: 'Gannett Library' },
  { id: '3', name: 'Park Center' },
  { id: '4', name: 'Williams Hall' },
  { id: '5', name: 'Textor Hall' },
];

export default function LocationsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Campus Locations</Text>

      <FlatList
        data={buildings}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardText}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}
