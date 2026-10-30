// Ahmad Taylor
// AccessIC - Sprint 1
// October 30, 2026

import React, { useState } from 'react';
import { View, Text, Switch } from 'react-native';
import styles from '../styles';

export default function SettingsScreen() {
  const [largeText, setLargeText] = useState(false);
  const [highContrast, setHighContrast] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Accessibility Settings</Text>

      <View style={styles.settingRow}>
        <Text style={styles.settingText}>Larger Text</Text>

        <Switch
          value={largeText}
          onValueChange={setLargeText}
          accessibilityLabel="Larger text"
        />
      </View>

      <View style={styles.settingRow}>
        <Text style={styles.settingText}>High Contrast Mode</Text>

        <Switch
          value={highContrast}
          onValueChange={setHighContrast}
          accessibilityLabel="High contrast mode"
        />
      </View>

      <Text style={styles.description}>
        AccessIC is designed to support accessible campus navigation.
      </Text>
    </View>
  );
}
