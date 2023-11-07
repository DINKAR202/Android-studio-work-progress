import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const NavBar = () => {
  return (
    <View>
      <Text style={styles.text}>I'm from NavBar Section.</Text>
    </View>
  );
};

const styles=StyleSheet.create({
        text:{
            fontSize: 40,
            color:'green',
        }
})

export default NavBar;
