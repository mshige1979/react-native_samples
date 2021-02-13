/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  Platform,
  Linking,
  Alert,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';

import Config from 'react-native-config';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import Icon from './src/components/common/Icon';

const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922 / 1;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const DEFAULT_POSITION = {
  latitude: 33.6264941,
  longitude: 130.6375119,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
};

const App = () => {
  const [region, setRegion] = useState(DEFAULT_POSITION);
  const markerRef = useRef();
  const mapRef = useRef();

  useEffect(() => {
    //getLocation().then(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * GPSより、現在位置取得
   */
  const getLocation = async () => {
    console.log(`region: `, region);

    // 権限チェック
    const result = await hasLocationPermission();
    console.log(`result: ${result}`);

    // 現在地取得
    if (result === true) {
      Geolocation.getCurrentPosition(
        // 正常
        (position) => {
          console.log(
            `ok: latitude=${position.coords.latitude}, longitude=${position.coords.longitude}`,
          );

          setMyLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          });
        },
        // 異常
        (error) => {
          console.log('error: ', error);
          //setRegion(DEFAULT_POSITION);
        },
        // パラメータ
        {
          accuracy: {
            android: 'high',
            ios: 'best',
          },
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 10000,
          distanceFilter: 0,
          forceRequestLocation: true,
          showLocationDialog: true,
        },
      );
    }

    // 権限未取得時は規定値
    if (result === false) {
      console.log('権限取得失敗');
      console.log(region);
      setMyLocation(DEFAULT_POSITION);
    }
  };

  const setMyLocation = (_region) => {
    setRegion(_region);
    mapRef.current.animateToRegion(_region);
  };

  /**
   * 権限取得
   * 参考URL: https://github.com/Agontuk/react-native-geolocation-service/blob/master/example/src/App.js
   */
  const hasLocationPermission = async () => {
    let result = false;

    // iOSチェック
    if (Platform.OS === 'ios') {
      const status = await Geolocation.requestAuthorization('whenInUse');
      console.log(`status: ${status}`);

      // 許可
      if (status === 'granted') {
        result = true;
      }

      // 未許可
      if (status === 'denied') {
        result = false;
      }

      // システム全体で無効化
      if (status === 'disabled') {
        Alert.alert(
          `システム設定でLocationが無効化されています。有効化してください。`,
          '',
          [
            {text: 'システム設定を開く', onPress: Linking.openSettings()},
            {text: '閉じる', onPress: () => {}},
          ],
        );
        result = false;
      }
    }
    // androidチェック
    if (Platform.OS === 'android') {
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
    }

    return result;
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.container}
        provider={PROVIDER_GOOGLE}
        ref={mapRef}
        //toolbarEnabled={true}
        //showsScale={true}
        //showsBuildings={true}
        //showsCompass={true}
        //followsUserLocation={true}
        //showsUserLocation={true}
        //showsMyLocationButton={true}
        compassOffset={{x: 50, y: 50}}
        //initialRegion={DEFAULT_POSITION}
        region={region}>
        <Marker ref={markerRef} coordinate={region}>
          <Icon name="my-location" size={24} color={'#3366FF'} />
        </Marker>
      </MapView>

      <TouchableOpacity
        style={{
          position: 'absolute',
          top: Platform.select({
            ios: 50,
            android: 10,
          }),
          left: 10,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FFFFFF',
          width: 48,
          height: 48,
          borderRadius: 48 / 2,
        }}
        onPress={() => {
          getLocation();
        }}>
        <Icon name="location" size={24} color="#000000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
