import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, ScrollView,  } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Divider } from 'react-native-elements'
import { Fontisto } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import ProfilPicture from '../../components/UserPictures/ProfilPicture';
import CoverPicture from '../../components/UserPictures/CoverPicture';
import ClassicButton from '../../components/ClassicBtn/ClassicBtn';
import colors from '../../config/colors';
import Screen from '../../components/Screen' 
import CircleIcon from '../../components/CircleIcon';
import GoBackBtn from '../../components/Buttons/GoBackBtn';
import EditProfil from '../../components/EditProfil/EditProfil';


const ProfilScreen = () => {
    
    return (
        <Screen style={{backgroundColor:colors.white}}>
        <View style={styles.goBackBtn}>
            <GoBackBtn />
        </View>
        <ScrollView>
            <View style={styles.mainContainer}>
                <View style={styles.test}>
                    <CoverPicture source={require('../../assets/psg.jpg')} />
                    <View style={[styles.ppContainer, {width: 90+10, height: 90+10, borderRadius: (90+10)/2}]}>
                        <ProfilPicture onPress={() => console.log('pp')} size={90} source={require('../../assets/maxime.jpg')} isCertified />
                    </View>
                </View>
                <View style={styles.container2}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20}}>
                        <View style={{width: '80%'}}>
                            <View style={{marginTop: 5, marginBottom: 5}}>
                                <Divider width={1} color={colors.lightGrey} />
                            </View>
                            <View style={styles.verified}>
                                <Text style={styles.accountName}>
                                    Maxime Neymar
                                </Text>
                                <Feather name="check-circle" size={18} color="black" />
                            </View>
                            <Text style={styles.userName}>
                                @max_psg                    
                            </Text>
                            <Text style={styles.bio}>
                                Investisseur cryptos, ici on fait gagner sale !
                                Satisfait ou remboursé direct garçon
                            </Text>
                        </View>
                        <View style={styles.iconsActions}>
                            <EditProfil />
                            <CircleIcon width={40} height={40} ><AntDesign name="adduser" size={21} color={colors.primary} /></CircleIcon>
                            <CircleIcon width={40} height={40}><MaterialCommunityIcons name="email-send-outline" size={21} color={colors.primary} /></CircleIcon>
                            <CircleIcon width={40} height={40}><Fontisto name="bell" size={21} color={colors.primary} /></CircleIcon>
                        </View>
                    </View>
                </View>
            </View>
            <Divider width={1} color={colors.lightGrey} />
            <View style={{padding: 15}}>
                <ClassicButton title="Subscribe" color={colors.primary} onPress={() => console.log("S'abonner")} />
            </View>
            <Divider width={6} color={colors.lightGrey} />
            <View style={styles.secondContainer}>
                <View style={styles.buttonsContainer}>
                    <Button title="Posts" color={colors.primary} onPress={() => console.log('Publication button pressed')} />
                    <View style={{ width: 1, height: '30%', backgroundColor: colors.lightGrey}} />
                    <Button title="Medias" color={colors.medium} onPress={() => console.log('Photo button pressed')} />
                    <View style={{ width: 1, height: '30%', backgroundColor: colors.lightGrey}} />
                    <Button title="Lives" color={colors.medium} onPress={() => console.log('Photo button pressed')} />
                </View>
                <View style={{width: '90%', alignSelf: 'center', marginTop: 8}}>
                    <Divider />
                </View>
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
        marginTop: 15,
        fontSize: 16
    },
    
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },


    container2: {
        padding: 10,
        marginTop: 10
    },
    
    container3: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,
    },
    
    followers: {
        padding: 10,
        flexDirection: 'row',
    },

    goBackBtn: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1,
    },

    iconsActions: {
        padding: 5,
        marginTop: "-15%",
        marginRight: "-3%",
        alignItems: 'flex-end',
        justifyContent: 'space-evenly'
        
    },

    mainContainer: {
        padding: 2
    },
    secondContainer: {
        padding: 5
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