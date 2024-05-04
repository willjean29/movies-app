import {moderateVerticalScale} from 'react-native-size-matters';
export enum FontSize {
  BodySmall = moderateVerticalScale(12),
  BodyMedium = moderateVerticalScale(14),
  BodyLarge = moderateVerticalScale(16),
  LabelSmall = moderateVerticalScale(18),
  LabelMedium = moderateVerticalScale(20),
  LabelLarge = moderateVerticalScale(22),
  TitleSmall = moderateVerticalScale(24),
  TitleMedium = moderateVerticalScale(26),
  TitleLarge = moderateVerticalScale(28),
  HeadlineSmall = moderateVerticalScale(30),
  HeadlineMedium = moderateVerticalScale(32),
  HeadlineLarge = moderateVerticalScale(34),
}

export type FontSizeType = keyof typeof FontSize;
