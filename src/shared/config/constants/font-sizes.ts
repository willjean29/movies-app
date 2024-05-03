import {moderateScale} from 'react-native-size-matters';
export enum FontSize {
  BodySmall = moderateScale(12),
  BodyMedium = moderateScale(14),
  BodyLarge = moderateScale(16),
  LabelSmall = moderateScale(18),
  LabelMedium = moderateScale(20),
  LabelLarge = moderateScale(22),
  TitleSmall = moderateScale(24),
  TitleMedium = moderateScale(26),
  TitleLarge = moderateScale(28),
  HeadlineSmall = moderateScale(30),
  HeadlineMedium = moderateScale(32),
  HeadlineLarge = moderateScale(34),
}

export type FontSizeType = keyof typeof FontSize;
