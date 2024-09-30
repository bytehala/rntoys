/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Colors} from './src/resources/Colors.ts';
import {AppleSeed} from './src/skia/AppleSeed.tsx';

function App(): React.JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.appContainer}>
      <AppleSeed />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: Colors.buff['900'],
  },
});

export default App;
