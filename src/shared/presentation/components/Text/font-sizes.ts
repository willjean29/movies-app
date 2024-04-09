export enum FontSize {
  BodySmall = '12px',
  BodyMedium = '14px',
  BodyLarge = '16px',
  LabelSmall = '18px',
  LabelMedium = '20px',
  LabelLarge = '22px',
  TitleSmall = '24px',
  TitleMedium = '26px',
  TitleLarge = '28px',
  HeadlineSmall = '30px',
  HeadlineMedium = '32px',
  HeadlineLarge = '34px',
}

export type FontSizeType = keyof typeof FontSize;
