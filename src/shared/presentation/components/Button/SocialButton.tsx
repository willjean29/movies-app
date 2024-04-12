import {Image} from 'react-native';
import React from 'react';
import {IconAssets} from '@shared/presentation/utils/icons';
import {Button} from '../';

interface SocialButtonProps {
  social: 'google' | 'apple';
  text: string;
}
const SocialButton: React.FC<SocialButtonProps> = ({social, text}) => {
  const path = social === 'google' ? IconAssets.Google : IconAssets.Apple;
  return (
    <Button mode="outlined" icon={<Image source={path} />}>
      {text}
    </Button>
  );
};

export default SocialButton;
