import {Image} from 'react-native';
import React from 'react';
import {IconAssets} from '@shared/presentation/utils/icons';
import Button from './Button';
import {useThemeState} from '@shared/presentation/theme/ThemeProvider';

interface SocialButtonProps {
  social: 'google' | 'apple';
  text: string;
}
const SocialButton: React.FC<SocialButtonProps> = ({social, text}) => {
  const {mode} = useThemeState();
  const path =
    social === 'google'
      ? IconAssets.Google
      : IconAssets[mode == 'light' ? 'AppleLight' : 'AppleDark'];
  return (
    <Button mode="outlined" icon={<Image source={path} />}>
      {text}
    </Button>
  );
};

export default SocialButton;
