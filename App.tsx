import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';
import Screen from './app/components/Screen';

import ClassicBtn from './app/components/ClassicBtn/ClassicBtn';
import AppTextInput from './app/components/AppTextInput/AppTextInput';

export default function App() {
  return (
      <Screen>
        <View style={styles.view}>
          <AppTextInput placeholder='Email' icon="email-outline" />
          <AppTextInput placeholder='password' icon="lock-outline" isPassword />

          <ClassicBtn 
            title='Sign in' 
            onPress={() => console.log('pressed !')} 
            icon={require('./app/assets/arrow.png')} />
          </View>
        <StatusBar style="auto" />
      </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view: {
    padding: 10,
    backgroundColor: "white"
  }
});
