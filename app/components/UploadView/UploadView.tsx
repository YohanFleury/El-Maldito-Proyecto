import React from 'react'
import { View, StyleSheet, Modal } from 'react-native'
import LottieView from 'lottie-react-native'

type UploadViewProps = {
    visible: boolean;
    onDone: () => void;
}

const UploadView = ({ visible, onDone }: UploadViewProps) => {
   return (
    <Modal visible={visible}>
      <View style={styles.container}>
        <LottieView 
            autoPlay
            loop={false}
            source={require('../../assets/animations/valide.json')}
            style={styles.animation}
            onAnimationFinish={onDone}
        />
      </View>
    </Modal>
   )
}

const styles = StyleSheet.create({
   animation: {
    width: 350
   }, 

   container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
   }
})

export default UploadView