import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Home = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Home</Text>
      </View>
      <View
        style={{
          margin: 10,
        }}>
        <Text>Topタブのサンプル このタブはスワイプしない</Text>
      </View>
      <View>
        <Button
          title="Profileへ移動"
          onPress={() => {
            navigation.jumpTo('Profile');
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

export default Home;
