import React from 'react';
import {} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Icon = (props) => {
  const name = props.name;
  const size = props.size;
  const color = props.color;

  const iconList = {
    location: <FontAwesome name="location-arrow" size={size} color={color} />,
    'my-location': (
      <MaterialIcons name="my-location" size={size} color={color} />
    ),
  };

  return <>{iconList[name]}</>;
};
export default Icon;
