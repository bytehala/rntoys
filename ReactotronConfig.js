import Reactotron from 'reactotron-react-native';

Reactotron.configure({
  port: 9091,
}) // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!
