// Ahmad Taylor
// AccessIC - Sprint 1
// October 30, 2026

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    padding: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#003B71',
    marginBottom: 20,
  },

  description: {
    fontSize: 17,
    color: '#333333',
    marginBottom: 15,
    lineHeight: 25,
  },

  button: {
    backgroundColor: '#0057B8',
    padding: 18,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    minHeight: 52,
    justifyContent: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#DDDDDD',
  },

  cardText: {
    fontSize: 17,
    color: '#222222',
  },

  settingRow: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 10,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  settingText: {
    fontSize: 17,
    color: '#222222',
    flexShrink: 1,
  },
});

export default styles;