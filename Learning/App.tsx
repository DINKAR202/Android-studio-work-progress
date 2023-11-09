import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
// import NavBar from './Components/NavBar';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <View style={{flex: 6}}>
      <View style={{flex: 1, backgroundColor: 'red'}}></View>
      <View style={{flex: 1, backgroundColor: 'green'}}></View>
      <NavigationContainer>
        <Text>hi</Text>
      </NavigationContainer>
      <View style={{flex: 1, backgroundColor: 'yellow'}}></View>
      {/* <NavBar /> */}
      <Text style={styles.heading}>Hi</Text>
      <Button title="Don't press here" />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    color: '#00fa9a',
    backgroundColor: '#800000',
    marginTop: '100',
  },
});

export default App;
