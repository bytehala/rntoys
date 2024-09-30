import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {Colors} from '../values/Colors.ts';
import {
  Blur,
  Canvas,
  Image,
  useImage,
  Group,
  Circle,
  Mask,
  Text as SkiaText,
  ColorMatrix,
  useFont,
} from '@shopify/react-native-skia';

export const AppleSeed = () => {
  const image = useImage(require('../../resources/images/profile_photo.png'));
  const {width, height} = Dimensions.get('window');

  const font = useFont(require('../../resources/fonts/Roboto-Bold.ttf'), 40);
  const text = 'Lemmy Coconut';
  const textWidth = font?.measureText(text) || {width: 0, height: 0};

  const handleFont = useFont(
    require('../../resources/fonts/Roboto-Regular.ttf'),
    24,
  );
  const handleText = '@l3mbanan3y';
  const handleTextWidth = handleFont?.measureText(handleText) || {
    width: 0,
    height: 0,
  };

  // center position for the profile photo
  const centerX = (width - 256) / 2;
  const centerY = (height - 256) / 2;

  // prettier-ignore
  const brillianceMatrix = [
    1.2, 0, 0, 0, 0.4, // Red
    0, 1.2, 0, 0, 0.4, // Green
    0, 0, 1.2, 0, 0.4, // Blue
    0, 0, 0, 1, 0,    // Alpha
  ];

  return (
    <View style={styles.container}>
      <View style={styles.canvasContainer}>
        <Canvas style={{width, height}}>
          <Image
            image={image}
            fit="contain"
            x={0}
            y={0}
            width={width}
            height={height}>
            <Blur blur={65} />
            <ColorMatrix matrix={brillianceMatrix} />
          </Image>
          <Mask
            mask={
              <SkiaText
                x={(width - textWidth.width) / 2}
                y={height / 2 + 150}
                font={font}
                text={text}
                color="black"
              />
            }>
            <Image
              image={image}
              fit="contain"
              x={(width - width * 0.9) / 2}
              y={(height - height * 0.9) / 2}
              width={width * 0.9}
              height={height * 0.9}>
              <Blur blur={10} />
            </Image>
          </Mask>

          <Mask
            mask={
              <SkiaText
                x={(width - handleTextWidth.width) / 2}
                y={height / 2 + 150 + textWidth.height}
                font={handleFont}
                text={handleText}
                color="black"
              />
            }>
            <Image
              image={image}
              fit="contain"
              x={(width - width * 0.8) / 2}
              y={(height - height * 0.8) / 2}
              width={width}
              height={height}>
              <Blur blur={10} />
            </Image>
          </Mask>

          <Mask
            mask={
              <Group>
                <Circle cx={width / 2} cy={height / 2} r={112} />
              </Group>
            }>
            <Image
              image={image}
              fit="contain"
              x={centerX}
              y={centerY}
              width={256}
              height={256}
            />
          </Mask>
        </Canvas>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    backgroundColor: Colors.tea_green.DEFAULT,
  },
  canvasContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
