import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from './values/Colors.ts';

export const BasicScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Basic Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: Colors.tea_green.DEFAULT,
  },
});
