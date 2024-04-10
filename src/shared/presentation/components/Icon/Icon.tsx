import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {IconProps} from 'react-native-vector-icons/Icon';
import {TouchableOpacity} from 'react-native';

const Icon: React.FC<IconProps> = ({color, onPress, ...props}) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress}>
      <MaterialCommunityIcons color={color} {...props} />
    </TouchableOpacity>
  );
};

export default Icon;
