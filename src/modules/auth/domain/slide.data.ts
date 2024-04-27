import {IconAssets} from '@shared/config/constants/icons';
import {ImageSourcePropType} from 'react-native';

export interface ItemSlide {
  id: string;
  title: string;
  subtitle: string;
  image: ImageSourcePropType;
}
export const slides: ItemSlide[] = [
  {
    id: '1',
    title: 'Find the latest and greatest movies here',
    subtitle:
      'Browse through our extensive collection and discover new and exciting films.',
    image: IconAssets.Step1,
  },
  {
    id: '2',
    title: 'Create and share your lists with your friends',
    subtitle:
      'Build personalized movie lists and share them with your friends for a unique social experience.',
    image: IconAssets.Step2,
  },
  {
    id: '3',
    title: 'Manage your favorite series and movies',
    subtitle:
      'Keep track of your favorite series and movies and never miss a moment.',
    image: IconAssets.Step3,
  },
];
