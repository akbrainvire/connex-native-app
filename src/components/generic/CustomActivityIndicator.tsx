import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';

const CustomActivityIndicator = ({
  animating,
  color,
}: {
  animating?: boolean;
  color?: string;
}) => {
  return (
    <ActivityIndicator
      animating={animating}
      size="large"
      color={color ? color : '#15ff00'}
      style={{marginTop: 'auto', marginBottom: 'auto'}}
    />
  );
};

export default CustomActivityIndicator;
