import { Dimensions, Platform } from 'react-native';

export enum DevicePlatform {
  Ios = 'ios',
  Android = 'android',
}

export const isIos = Platform.OS === DevicePlatform.Ios;
export const isAndroid = Platform.OS === DevicePlatform.Android;

export enum DeviceDimensions {
  Width = Dimensions.get('window').width,
  Height = Dimensions.get('window').height,
}
