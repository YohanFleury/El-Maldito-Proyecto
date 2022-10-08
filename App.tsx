import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';
import Screen from './app/components/Screen';

import ClassicBtn from './app/components/ClassicBtn/ClassicBtn';
import AppTextInput from './app/components/AppTextInput/AppTextInput';
import LoginScreen from './app/screens/LoginScreen/LoginScreen';
import FormsTemplate from './app/components/Forms/FormsTemplate';

export default function App() {
  return (
      <LoginScreen />
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
