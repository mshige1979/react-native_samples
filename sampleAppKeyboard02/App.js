/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {Input} from 'react-native-elements';

const App = () => {
  const [backgeoundColor1, setBackgounrColor1] = useState('#FFFFFF');
  const [backgeoundColor2, setBackgounrColor2] = useState('#FFFFFF');
  const [backgeoundColor3, setBackgounrColor3] = useState('#FFFFFF');
  const [backgeoundColor4, setBackgounrColor4] = useState('#FFFFFF');
  const [backgeoundColor5, setBackgounrColor5] = useState('#FFFFFF');
  const [backgeoundColor6, setBackgounrColor6] = useState('#FFFFFF');
  const [backgeoundColor7, setBackgounrColor7] = useState('#FFFFFF');
  const [backgeoundColor8, setBackgounrColor8] = useState('#FFFFFF');
  const [backgeoundColor9, setBackgounrColor9] = useState('#FFFFFF');
  const [backgeoundColor10, setBackgounrColor10] = useState('#FFFFFF');

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}>
      <ScrollView style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.label}>default</Text>
          <Input
            style={[
              styles.input,
              {
                backgroundColor: backgeoundColor1,
                color: backgeoundColor1 === '#FFFFFF' ? '#000000' : '#FFFFFF',
              },
            ]}
            keyboardType={'default'}
            autoCompleteType={'off'}
            autoCapitalize={'none'}
            onFocus={() => {
              setBackgounrColor1('#000000');
            }}
            onBlur={() => {
              setBackgounrColor1('#FFFFFF');
            }}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>numeric</Text>
          <Input
            style={[
              styles.input,
              {
                backgroundColor: backgeoundColor2,
                color: backgeoundColor2 === '#FFFFFF' ? '#000000' : '#FFFFFF',
              },
            ]}
            keyboardType={'numeric'} /** キーボードタイプ */
            autoCompleteType={'off'}
            autoCapitalize={'none'}
            onFocus={() => {
              setBackgounrColor2('#000000');
            }}
            onBlur={() => {
              setBackgounrColor2('#FFFFFF');
            }}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>email-address</Text>
          <Input
            style={[
              styles.input,
              {
                backgroundColor: backgeoundColor3,
                color: backgeoundColor3 === '#FFFFFF' ? '#000000' : '#FFFFFF',
              },
            ]}
            keyboardType={'email-address'}
            autoCompleteType={'off'}
            autoCapitalize={'none'}
            onFocus={() => {
              setBackgounrColor3('#000000');
            }}
            onBlur={() => {
              setBackgounrColor3('#FFFFFF');
            }}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>ascii-capable</Text>
          <Input
            style={[
              styles.input,
              {
                backgroundColor: backgeoundColor4,
                color: backgeoundColor4 === '#FFFFFF' ? '#000000' : '#FFFFFF',
              },
            ]}
            keyboardType={'ascii-capable'}
            autoCompleteType={'off'}
            autoCapitalize={'none'}
            onFocus={() => {
              setBackgounrColor4('#000000');
            }}
            onBlur={() => {
              setBackgounrColor4('#FFFFFF');
            }}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>numbers-and-punctuation</Text>
          <Input
            style={[
              styles.input,
              {
                backgroundColor: backgeoundColor5,
                color: backgeoundColor5 === '#FFFFFF' ? '#000000' : '#FFFFFF',
              },
            ]}
            keyboardType={'numbers-and-punctuation'}
            autoCompleteType={'off'}
            autoCapitalize={'none'}
            onFocus={() => {
              setBackgounrColor5('#000000');
            }}
            onBlur={() => {
              setBackgounrColor5('#FFFFFF');
            }}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>url</Text>
          <Input
            style={[
              styles.input,
              {
                backgroundColor: backgeoundColor6,
                color: backgeoundColor6 === '#FFFFFF' ? '#000000' : '#FFFFFF',
              },
            ]}
            keyboardType={'url'}
            autoCompleteType={'off'}
            autoCapitalize={'none'}
            onFocus={() => {
              setBackgounrColor6('#000000');
            }}
            onBlur={() => {
              setBackgounrColor6('#FFFFFF');
            }}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>decimal-pad</Text>
          <Input
            style={[
              styles.input,
              {
                backgroundColor: backgeoundColor7,
                color: backgeoundColor7 === '#FFFFFF' ? '#000000' : '#FFFFFF',
              },
            ]}
            keyboardType={'decimal-pad'}
            autoCompleteType={'off'}
            autoCapitalize={'none'}
            onFocus={() => {
              setBackgounrColor7('#000000');
            }}
            onBlur={() => {
              setBackgounrColor7('#FFFFFF');
            }}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>twitter</Text>
          <Input
            style={[
              styles.input,
              {
                backgroundColor: backgeoundColor8,
                color: backgeoundColor8 === '#FFFFFF' ? '#000000' : '#FFFFFF',
              },
            ]}
            keyboardType={'twitter'}
            autoCompleteType={'off'}
            autoCapitalize={'none'}
            onFocus={() => {
              setBackgounrColor8('#000000');
            }}
            onBlur={() => {
              setBackgounrColor8('#FFFFFF');
            }}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>web-search</Text>
          <Input
            style={[
              styles.input,
              {
                backgroundColor: backgeoundColor9,
                color: backgeoundColor9 === '#FFFFFF' ? '#000000' : '#FFFFFF',
              },
            ]}
            keyboardType={'web-search'}
            autoCompleteType={'off'}
            autoCapitalize={'none'}
            onFocus={() => {
              setBackgounrColor9('#000000');
            }}
            onBlur={() => {
              setBackgounrColor9('#FFFFFF');
            }}
          />
        </View>
        {Platform.OS === 'android' && (
          <View style={styles.row}>
            <Text style={styles.label}>visible-password(android only)</Text>
            <Input
              style={[
                styles.input,
                {
                  backgroundColor: backgeoundColor10,
                  color:
                    backgeoundColor10 === '#FFFFFF' ? '#000000' : '#FFFFFF',
                },
              ]}
              keyboardType={'visible-password'}
              autoCompleteType={'off'}
              autoCapitalize={'none'}
              onFocus={() => {
                setBackgounrColor10('#000000');
              }}
              onBlur={() => {
                setBackgounrColor10('#FFFFFF');
              }}
            />
          </View>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.select({
      android: 0,
      ios: 30,
    }),
    marginBottom: Platform.select({
      android: 20,
      ios: 30,
    }),
  },
  row: {
    //flexDirection: 'row',
    padding: 10,
  },
  label: {
    //flex: 1,
    //width: 100,
    //flexDirection: 'row-reverse',
    paddingLeft: 0,
    padding: 10,
  },
  input: {
    flex: 1,
    padding: 5,
    borderWidth: 1,
    height: 30,
  },
});

export default App;
