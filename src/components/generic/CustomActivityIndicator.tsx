import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';

const CustomActivityIndicator = ({animating}: {animating?: boolean}) => {
  return (
    <ActivityIndicator
      animating={animating}
      size="large"
      color={'#242424'}
      style={{marginTop: 'auto', marginBottom: 'auto'}}
    />
  );
};

export default CustomActivityIndicator;
