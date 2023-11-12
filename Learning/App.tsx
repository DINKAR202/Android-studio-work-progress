import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const App = () => {
  const handlePress = () => {
    alert('Button pressed!');
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.button}>
      <Text style={styles.text}>Press me</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default App;
