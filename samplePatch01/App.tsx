/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  Text,
  Button,
  View,
} from 'react-native';

import GPSState from 'react-native-gps-state';

const App = () => {
  // 位置情報の権限の有無をチェックし、存在しない場合は取得する
  const hasLocationPermission = async () => {
    let result = false;

    // androidチェック
    if (Platform.OS === 'android') {
      // androidの位置情報のステータスを取得
      const gpsState = await GPSState.getStatus();
      console.log(`gpsState: ${gpsState}`);

      if (gpsState > 1) {
        if (Platform.Version < 23) {
          console.log(`android sdk  version < 23`);
          return true;
        }
        const status = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        console.log(`status: ${status}`);

        // 許可
        if (status === PermissionsAndroid.RESULTS.GRANTED) {
          result = true;
        }

        // 未許可
        if (status === PermissionsAndroid.RESULTS.DENIED) {
          // 許可しない
          result = false;
        } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
          // 許可しない（次回から表示しない）
          result = false;
        }
      } else {
        // システム全体で無効化
        result = false;
      }

      return result;
    }
  };

  return (
    <SafeAreaView>
      <View
        style={{
          padding: 10,
        }}>
        <Text>下のボタンを押下したらGPS権限取得する</Text>
        <View>
          <Button
            title="位置情報の権限チェック"
            onPress={() => {
              hasLocationPermission();
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
