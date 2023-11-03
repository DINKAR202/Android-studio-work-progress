import React from 'react';
import {View, Text, Button} from 'react-native';
import NavBar from './Components/NavBar';

const App = () => {
  return (
    <View>
      <NavBar />
      <Text style={{fontSize: 40}}>Hi</Text>
      <Button title="press here and click this button" />
    </View>
  );
};

export default App;
