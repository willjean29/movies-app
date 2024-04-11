import {View, Text, Image} from 'react-native';
import React from 'react';
import {Button} from '../';

interface SocialButtonProps {
  social: 'google' | 'apple';
  text: string;
}
const SocialButton: React.FC<SocialButtonProps> = ({social, text}) => {
  return (
    <Button
      mode="outlined"
      icon={
        <Image
          source={
            social === 'google'
              ? require('../../../../shared/presentation/assets/google.png')
              : require('../../../../shared/presentation/assets/apple.png')
          }
        />
      }>
      {text}
    </Button>
  );
};

export default SocialButton;
