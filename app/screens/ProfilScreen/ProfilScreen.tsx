import React from 'react';
import { View, StyleSheet, Text, Button, ScrollView, Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Divider } from 'react-native-elements'
import { Fontisto } from '@expo/vector-icons';


import ProfilPicture from '../../components/UserPictures/ProfilPicture';
import CoverPicture from '../../components/UserPictures/CoverPicture';
import ClassicButton from '../../components/ClassicBtn/ClassicBtn';
import colors from '../../config/colors';
import Screen from '../../components/Screen' 
import CircleIcon from '../../components/CircleIcon';
import { AccountProProps } from './ProfilScreen-types';


const ProfilScreen = ({
    userName,
    accountName,
    coverPictureSource, 
    profilPictureSource, 
    ppSize,
    onPressProfilPicture
}: AccountProProps) => {
    return (
    <Screen>
        <ScrollView>
            <View style={styles.mainContainer}>
                <View style={styles.test}>
                    <CoverPicture source={coverPictureSource} />
                    <View style={[styles.ppContainer, {width: ppSize+10, height: ppSize+10, borderRadius: (ppSize+10)/2}]}>
                        <ProfilPicture onPress={onPressProfilPicture} size={ppSize} source={profilPictureSource} isCertified />
                    </View>
                </View>
                <View style={styles.container2}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20}}>
                        <View style={{width: '80%'}}>
                            <View style={styles.verified}>
                                <Text style={styles.accountName}>
                                    {accountName}
                                </Text>
                                <MaterialCommunityIcons name="check-circle-outline" size={22} />
                            </View>
                            <Text style={styles.userName}>
                                @{userName}                    
                            </Text>
                            <Text style={styles.bio}>
                                Hello moi c'est maxime, ultra du psg depuis 27 ans ! Je vais vous faire 
                                vivre ma passion avec ferveur. Allez Paris !!
                            </Text>
                        </View>
                        <View style={styles.iconsActions}>
                            <CircleIcon><AntDesign name="adduser" size={24} color={colors.primary} /></CircleIcon>
                            <CircleIcon><MaterialCommunityIcons name="email-send-outline" size={24} color={colors.primary} /></CircleIcon>
                            <CircleIcon><Fontisto name="bell" size={24} color={colors.primary} /></CircleIcon>
                        </View>
                    </View>
                    <ClassicButton title="Subscribe" color={colors.primary} onPress={() => console.log("S'abonner")} />
                </View>
            </View>
            <Divider width={4} color={colors.lightGrey} />
            <View style={styles.secondContainer}>
                <View style={styles.buttonsContainer}>
                    <Button title="Feed" color={colors.primary} onPress={() => console.log('Publication button pressed')} />
                    <Button title="Medias" color={colors.primary} onPress={() => console.log('Photo button pressed')} />
                </View>
                <Divider />
            </View>
        </ScrollView>
    </Screen>
)
}
const styles = StyleSheet.create({
    accountName: {
        textAlign: 'center',
        fontSize: 19,
        fontWeight: 'bold',
        marginRight: 5,
        marginBottom: 5
    },
    bio: {
        marginTop: 15
    },
    
    buttonsContainer: {
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },


    container2: {
        padding: 15,
        marginTop: 10
    },
    
    container3: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 15,
    },
    
    mainContainer: {
        padding: 2
    },
    secondContainer: {
        padding: 15
    },
    test: {
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        marginBottom: -50
    },
    ppContainer: {
        backgroundColor:colors.white,
        alignItems: 'center',
        bottom: 50,
        left: "35%",
    },
    iconsActions: {
        padding: 5,
        marginTop: "-15%",
        alignItems: 'flex-end',
        justifyContent: 'space-evenly'
        
    },
    userName: {
        fontSize: 15,
        color: colors.medium
    },

    verified: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
})

export default ProfilScreen;