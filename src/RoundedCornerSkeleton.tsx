import {View} from 'react-native';

/**
 * Just saw a question on Reddit on how to do rounded corner skeleton loading view
 * Wanted to see if I can do it without vectors, just
 */

const BORDER_RADIUS = 25;

export const RoundedCornerSkeleton = () => {
  return (
    <View
      style={{
        // flex: 1,
        paddingTop: 60,
        backgroundColor: 'white',
        alignItems: 'center',
        // justifyContent: 'center',
        height: '100%',
      }}>
      <View>
        <View
          style={{
            backgroundColor: 'black',
            width: 240,
            height: 50,
            borderRadius: BORDER_RADIUS,
            borderBottomLeftRadius: 0,
          }}></View>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              backgroundColor: 'black',
              width: 160,
              height: 50,
              borderRadius: BORDER_RADIUS,
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
            }}></View>
          <View
            style={{
              backgroundColor: 'black',
              width: 40,
              height: 50,
            }}>
            <View
              style={{
                backgroundColor: 'white',
                borderTopLeftRadius: BORDER_RADIUS,
                width: 40,
                height: 50,
              }}></View>
          </View>
        </View>
      </View>
    </View>
  );
};
