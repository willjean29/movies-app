import { Image } from 'react-native';
import React from 'react';
import { IconAssets } from '@shared/config/constants/icons';
import Button from './Button';
import { useGlobalAppState } from '@shared/presentation/store/app-context';
import { moderateVerticalScale, scale } from 'react-native-size-matters';

interface SocialButtonProps {
  social: 'google' | 'apple';
  text: string;
}
const SocialButton: React.FC<SocialButtonProps> = ({ social, text }) => {
  const { theme } = useGlobalAppState();
  const path = social === 'google' ? IconAssets.Google : IconAssets[theme == 'light' ? 'AppleLight' : 'AppleDark'];
  return (
    <Button
      mode="outlined"
      icon={
        <Image
          source={path}
          style={{
            width: moderateVerticalScale(24),
            height: moderateVerticalScale(24),
          }}
        />
      }>
      {text}
    </Button>
  );
};

export default SocialButton;
