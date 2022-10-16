import { Provider } from 'react-redux'
import { store } from './app/redux/store'
import MyApp from './MyApp';

const App = () => {

  return (
    <Provider store={store}>
      <MyApp />
    </Provider>
  );
}


export default App


{/* <ProfilScreen
          userName='max_psg'
          accountName='Maxime Neymar'
          bio="Hello moi c'est maxime, ultra du psg depuis 27 ans ! Je vais vous faire 
          vivre ma passion avec ferveur. Allez Paris !!"
          followers={315450}
          coverPictureSource={require('./app/assets/psg.jpg')}
          profilPictureSource={require('./app/assets/maxime.jpg')}
          onPressProfilPicture={() => console.log('photo pressed')}
          ppSize={90}
        /> */}