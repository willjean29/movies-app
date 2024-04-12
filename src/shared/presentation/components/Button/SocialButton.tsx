import {Image} from 'react-native';
import React from 'react';
import {Button} from '../';
import {IconAssets} from '@shared/presentation/utils/icons';

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
