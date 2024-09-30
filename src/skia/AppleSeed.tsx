import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../resources/Colors.ts';
import {Canvas, Image, Skia} from '@shopify/react-native-skia';

export const AppleSeed = () => {
  // A sample base64-encoded pixel
  const data = Skia.Data.fromBase64(
    'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==',
  );
  const image = Skia.Image.MakeImageFromEncoded(data);

  return (
    <View style={styles.container}>
      <Text>Johnny Appleseed</Text>
      <Canvas style={{flex: 1}}>
        <Image
          image={image}
          fit="contain"
          x={0}
          y={0}
          width={256}
          height={256}
        />
      </Canvas>
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
