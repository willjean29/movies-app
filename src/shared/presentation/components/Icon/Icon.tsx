import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {IconProps} from 'react-native-vector-icons/Icon';

const Icon: React.FC<IconProps> = ({color, ...props}) => {
  return <MaterialCommunityIcons color={color} {...props} />;
};

export default Icon;
