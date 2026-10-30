// Ahmad Taylor
// AccessIC - Sprint 1
// October 30, 2026

import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';

export default function FavoritesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorite Routes</Text>

      <View style={styles.card}>
        <Text style={styles.cardText}>
          Campus Center → Gannett Library
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardText}>
          Williams Hall → Textor Hall
        </Text>
      </View>
    </View>
  );
}
