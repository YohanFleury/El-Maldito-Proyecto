import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';

import ClassicBtn from './app/components/ClassicBtn/ClassicBtn';

export default function App() {
  return (
    <View style={styles.container}>
      <ClassicBtn 
        title='Sign in' 
        onPress={() => console.log('pressed !')} 
        icon={require('./app/assets/arrow.png')} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
