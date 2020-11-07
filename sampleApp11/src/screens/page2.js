import React from 'react';
import {View, Text, Button} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const Page2 = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Page2</Text>
      <Button
        title="Homeへ戻る"
        onPress={() => {
          navigation.popToTop();
        }}
      />
    </View>
  );
};

export default Page2;
