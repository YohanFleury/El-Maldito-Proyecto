import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, } from 'react-native';
import Screen from './app/components/Screen';

import ClassicBtn from './app/components/ClassicBtn/ClassicBtn';
import AppTextInput from './app/components/AppTextInput/AppTextInput';
import LoginScreen from './app/screens/LoginScreen/LoginScreen';
import FormsTemplate from './app/components/Forms/FormsTemplate';
import RegisterScreen from './app/screens/RegisterScreen/RegisterScreen';

import {Amplify} from 'aws-amplify'
import awsconfig from './src/aws-exports'

Amplify.configure(awsconfig)

const App = () => {
  return (
        <RegisterScreen />
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

export default App
