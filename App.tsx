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

Amplify.configure(awsconfig)

const App = () => {
  return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
        <NotifCard 
            content='Avatars are found all over ui design from lists to profile screens. They are commonly used to represent'
            time='6h'
            onPress={() => console.log('pressed')}
            onPressAvatar={() => console.log('profil pressed')}
            source={require('./app/assets/maxime.jpg')} />
            <NotifCard 
            content='Avatars are found all over ui design from lists to profile screens. They are commonly used to represent'
            time='6h'
            onPress={() => console.log('pressed')}
            onPressAvatar={() => console.log('profil pressed')}
            source={require('./app/assets/maxime.jpg')} />
            <NotifCard 
            content='Avatars are found all over ui design from lists to profile screens. They are commonly used to represent Avatars are found all over ui design from lists to profile screens. They are commonly used to represent'
            time='6h'
            onPress={() => console.log('pressed')}
            onPressAvatar={() => console.log('profil pressed')}
            source={require('./app/assets/maxime.jpg')} />
            <NotifCard 
            content='Avatars are found all over ui design from lists to profile screens. They are commonly used to represent'
            time='6h'
            onPress={() => console.log('pressed')}
            onPressAvatar={() => console.log('profil pressed')}
            source={require('./app/assets/maxime.jpg')} />
            <NotifCard 
            content='Avatars are found all over ui design from lists to profile screens. They are commonly used to represent Avatars are found all over ui design from lists to profile screens. They are commonly used to represent'
            time='6h'
            onPress={() => console.log('pressed')}
            onPressAvatar={() => console.log('profil pressed')}
            source={require('./app/assets/maxime.jpg')} />
            <NotifCard 
            content='Avatars are found all over ui design from lists to profile screens. They are commonly used to represent'
            time='6h'
            onPress={() => console.log('pressed')}
            onPressAvatar={() => console.log('profil pressed')}
            source={require('./app/assets/maxime.jpg')} />
            <NotifCard 
            content='Avatars are found all over ui design from lists to profile screens. They are commonly used to represent'
            time='6h'
            onPress={() => console.log('pressed')}
            onPressAvatar={() => console.log('profil pressed')}
            source={require('./app/assets/maxime.jpg')} />
            <NotifCard 
            content='Avatars are found all over ui design from lists to profile screens. They are commonly used to represent Avatars are found all over ui design from lists to profile screens. They are commonly used to represent'
            time='6h'
            onPress={() => console.log('pressed')}
            onPressAvatar={() => console.log('profil pressed')}
            source={require('./app/assets/maxime.jpg')} />
            <NotifCard 
            content='Avatars are found all over ui design from lists to profile screens. They are commonly used to represent'
            time='6h'
            onPress={() => console.log('pressed')}
            onPressAvatar={() => console.log('profil pressed')}
            source={require('./app/assets/maxime.jpg')} />
            <NotifCard 
            content='Avatars are found all over ui design from lists to profile screens. They are commonly used to represent Avatars are found all over ui design from lists to profile screens. They are commonly used to represent'
            time='6h'
            onPress={() => console.log('pressed')}
            onPressAvatar={() => console.log('profil pressed')}
            source={require('./app/assets/maxime.jpg')} />
          </ScrollView>
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
