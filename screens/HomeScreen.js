// Ahmad Taylor
// AccessIC - Sprint 1
// October 30, 2026

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome to AccessIC
      </Text>

      <Text style={styles.description}>
        Accessible navigation for Ithaca College.
      </Text>

      <Text style={styles.description}>
        Find step-free routes and accessible building entrances.
      </Text>

      <TouchableOpacity
        style={styles.button}
        accessibilityRole="button"
        accessibilityLabel="Find an accessible route"
        onPress={() => alert('Route finder coming soon!')}
      >
        <Text style={styles.buttonText}>
          Find Route
        </Text>
      </TouchableOpacity>
    </View>
  );
}