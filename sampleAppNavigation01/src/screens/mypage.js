import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const MyPage = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <Text>MyPage</Text>
      <View>
        <Button
          title="Homeへ移動"
          onPress={() => {
            navigation.jumpTo('Home');
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyPage;
