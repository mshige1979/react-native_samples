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
import PushNotice, {
  PushNotificationOptions,
  PushNotificationScheduleObject,
} from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';

const App = () => {
  useEffect(() => {}, []);

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
        console.log(`hasLocationPermission status: ${status}`);

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

  // 通知の権限の有無をチェックし、存在しない場合は取得する
  const hasNotificationPermission = async () => {
    let result = false;

    // androidチェック
    if (Platform.OS === 'android') {
      const status = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      );
      console.log(`hasNotificationPermission status: ${status}`);

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
          <Button
            title="通知の権限チェック"
            onPress={() => {
              hasNotificationPermission();
            }}
          />
          <Button
            title="通知初期化"
            onPress={() => {
              setTimeout(() => {
                // 初期設定
                const options: PushNotificationOptions = {
                  onRegister: () => {
                    // TODO: そのうち
                    console.log('onRegister');
                  },
                  onRegistrationError: (err: any) => {
                    console.log('onRegistrationError: ', err);
                  },
                  onAction: (notification: any) => {
                    console.log('onAction:', notification);
                  },
                  onNotification: (notification: any) => {
                    console.log('onNotification:', notification);
                    // required on iOS only (see fetchCompletionHandler docs: https://facebook.github.io/react-native/docs/pushnotificationios.html)
                    notification.finish(PushNotificationIOS.FetchResult.NoData);
                  },

                  // iOS用パラメータ
                  permissions: {
                    alert: true,
                    badge: true,
                    sound: true,
                  },
                  //invokeApp: true,
                  popInitialNotification: true,
                  requestPermissions: Platform.OS === 'ios',
                };
                PushNotice.configure(options);

                // iOSは設定不要
                if (Platform.OS === 'ios') {
                  return;
                }

                // channel登録
                PushNotice.createChannel(
                  {
                    channelId: 'mshige1979-hogehoge-push', // (required)
                    channelName: 'My channel', // (required)
                    channelDescription:
                      'A channel to categorise your notifications', // (optional) default: undefined.
                    soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
                    importance: 4, // (optional) default: 4. Int value of the Android notification importance
                    vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
                  },
                  created => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
                );
              }, 1000);
            }}
          />
          <Button
            title="ローカルプッシュ"
            onPress={() => {
              PushNotice.localNotification({
                channelId: 'mshige1979-hogehoge-push', // (required)
                id: '1',
                title: 'title',
                message: 'message',
              });
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
