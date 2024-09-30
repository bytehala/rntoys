import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {Colors} from '../values/Colors.ts';
import {
  Blur,
  Canvas,
  Circle,
  ColorMatrix,
  Group,
  Image,
  Mask,
  Shadow,
  Text as SkiaText,
  useFont,
  useImage,
} from '@shopify/react-native-skia';
import {useSharedValue} from 'react-native-reanimated';

export const AppleSeed = () => {
  const image = useImage(require('../../resources/images/profile_photo.png'));
  const {width} = Dimensions.get('window');
  const height = width + 100;

  const font = useFont(require('../../resources/fonts/Roboto-Bold.ttf'), 40);
  const nameText = 'Lemmy Coconut';
  const nameDimensions = font?.measureText(nameText) || {width: 0, height: 0};

  const handleFont = useFont(
    require('../../resources/fonts/Roboto-Regular.ttf'),
    24,
  );
  const handleText = '@l3mbanan3y';
  const handleTextWidth = handleFont?.measureText(handleText) || {
    width: 0,
    height: 0,
  };

  const imageWidth = 256;
  const imageHeight = 256;

  const bgImageDimension = width;

  // offset position for the expanded image, so the shirt blur is closer to the circular clip
  const expandedImageNegativeOffsetY = -95;

  // offset position for the profile photo
  const profilePictureOffsetX = (width - imageWidth) / 2;
  const profilePictureOffsetY = 0;

  const profilePictureCenterY = imageHeight / 2;
  const offsetAfterProfilePicture = 150;

  const nameTextY = profilePictureCenterY + offsetAfterProfilePicture;

  // prettier-ignore
  const brillianceMatrix = [
    1.2, 0, 0, 0, 0.4, // Red
    0, 1.2, 0, 0, 0.4, // Green
    0, 0, 1.2, 0, 0.4, // Blue
    0, 0, 0, 1, 0,    // Alpha
  ];

  const size = useSharedValue({width: 0, height: 0});

  // NOTE: Leaving this here, because useAnimatedReaction is how you can listen to changes in reanimated SharedValue
  // useAnimatedReaction(
  //   () => size.value,
  //   newSize => {
  //     console.log('size', newSize);
  //   },
  //   [size],
  // );

  return (
    <View style={styles.container}>
      <Canvas style={{height}} onSize={size}>
        <Image
          image={image}
          fit="scaleDown"
          x={0}
          y={expandedImageNegativeOffsetY}
          width={bgImageDimension}
          height={bgImageDimension}>
          <Blur blur={65} />
          <ColorMatrix matrix={brillianceMatrix} />
        </Image>

        <Mask
          mask={
            <SkiaText
              x={(width - nameDimensions.width) / 2}
              y={nameTextY}
              font={font}
              text={nameText}
              color="black"
            />
          }>
          <Image
            image={image}
            fit="scaleDown"
            x={0}
            y={expandedImageNegativeOffsetY}
            width={bgImageDimension}
            height={bgImageDimension}>
            <Blur blur={10} />
          </Image>
        </Mask>

        <Mask
          mask={
            <SkiaText
              x={(width - handleTextWidth.width) / 2}
              y={nameTextY + nameDimensions.height}
              font={handleFont}
              text={handleText}
              color="black"
            />
          }>
          <Image
            image={image}
            fit="contain"
            x={0}
            y={nameDimensions.height + expandedImageNegativeOffsetY}
            width={bgImageDimension}
            height={bgImageDimension}>
            <Blur blur={10} />
          </Image>
        </Mask>

        {/* Profile Picture Circle */}
        <Circle cx={width / 2} cy={profilePictureCenterY} r={112}>
          <Shadow
            dx={0}
            dy={5}
            blur={10}
            color={'rgba(0,0,0,0.5)'}
            shadowOnly={true}
          />
        </Circle>
        <Mask
          mask={
            <Group>
              <Circle cx={width / 2} cy={profilePictureCenterY} r={112} />
            </Group>
          }>
          <Image
            image={image}
            fit="contain"
            x={profilePictureOffsetX}
            y={profilePictureOffsetY}
            width={imageWidth}
            height={imageHeight}
          />
        </Mask>
      </Canvas>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'flex-start',
    backgroundColor: Colors.tea_green.DEFAULT,
  },
  canvasContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
