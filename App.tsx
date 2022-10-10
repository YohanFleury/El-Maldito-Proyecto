import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native';
import Screen from './app/components/Screen';

import ClassicBtn from './app/components/ClassicBtn/ClassicBtn';
import AppTextInput from './app/components/AppTextInput/AppTextInput';
import LoginScreen from './app/screens/LoginScreen/LoginScreen';
import FormsTemplate from './app/components/Forms/FormsTemplate';
import RegisterScreen from './app/screens/RegisterScreen/RegisterScreen';

import {Amplify} from 'aws-amplify'
import awsconfig from './src/aws-exports'
import NotifCard from './app/components/NotificationCard/NotifCard';
import NotifsScreen from './app/screens/NotifsScreen/NotifsScreen';
import ProfilScreen from './app/screens/ProfilScreen/ProfilScreen';

Amplify.configure(awsconfig)

const App = () => {
  return (
      <SafeAreaView style={styles.container}>
        <ProfilScreen
          userName='max_psg'
          accountName='Maxime Neymar'
          coverPictureSource={require('./app/assets/psg.jpg')}
          profilPictureSource={require('./app/assets/maxime.jpg')}
          onPressProfilPicture={() => console.log('photo pressed')}
          ppSize={90}
        />
      </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  view: {
    padding: 10,
    backgroundColor: "white"
  }
});

export default App
