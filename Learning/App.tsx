import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hi there</Text>
      <TouchableOpacity
        style={styles.cursorButton}
        onPress={() => alert('Cursor button pressed')}>
        <Text style={styles.buttonText}>Cursor</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 54,
    marginBottom: 20,
  },
  cursorButton: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default App;
