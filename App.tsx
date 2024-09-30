/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {BasicScreen} from './src/BasicScreen.tsx';
import {Colors} from './src/resources/Colors.ts';

function App(): React.JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.appContainer}>
      <BasicScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: Colors.buff['900'],
  },
});

export default App;
