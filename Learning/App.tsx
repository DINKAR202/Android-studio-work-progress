import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import NavBar from './Components/NavBar';

const App = () => {
  return (
    <View>
      <NavBar />
      <Text style={styles.heading}>Hi</Text>
      <Button title="press here and click this button" />
    </View>
  );
};

const styles = StyleSheet.create({
  heading:{
    fontSize: 40,
    color: '#00fa9a',
    backgroundColor:'#800000',
    marginTop: '100',
  }

})

export default App;
