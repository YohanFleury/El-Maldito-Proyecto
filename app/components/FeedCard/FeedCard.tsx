import React, { useState } from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { Entypo, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import { Divider, Avatar } from 'react-native-elements'


import colors from '../../config/colors'
import { PubliCardProps } from './FeedCard-types'
import ProfilPicture from '../UserPictures/ProfilPicture'

const FeedCard =({
    avatarSource,
    nbComments,
    nbLikes,
    textContent,
    imageSource,
    userName,
    name,
    publicationTime
 }: PubliCardProps)=> {

    const [outline, setOutline] = useState(true)
    const [likes, setLikes] = useState(178)
    const handleClick = () => {
        setOutline(!outline)
        !outline ? setLikes(178) : setLikes(likes + 1)
    }

   return (
    <>
    <View style={styles.container}>
        <View style={styles.leftContainer}>
            <ProfilPicture source={avatarSource} onPress={() => console.log('Go to user Profil')} size={52} />
        </View>
        <View style={styles.rightContainer}>
            <View style={styles.topContainer}>
                <View style={styles.userInfos}>
                    <Text style={{fontWeight: 'bold', fontSize: 18}}> {name}</Text>
                    <Text style={{fontSize: 15, marginLeft: 5 }}> @{userName}</Text>
                </View>
                <MaterialIcons name="more-horiz" size={23} color={colors.medium} />
            </View>
            <Text> 
                {publicationTime}
            </Text>
            <View style={styles.content}>
                <Text style={{fontSize: 17}}>{textContent}</Text>
            </View>
            <Image source={imageSource} style={styles.image} />
            <View style={styles.reactions}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <MaterialCommunityIcons name={outline ? "cards-heart-outline" : "cards-heart"} size={20} color={colors.primary} onPress={handleClick} />
                    <Text> {nbLikes}</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <MaterialCommunityIcons name="comment-outline" size={18} color={colors.primary} />
                    <Text> {nbComments}</Text>
                </View>
                <MaterialCommunityIcons name="export" size={21} color={colors.primary} />
            </View>
        </View>
    </View>
    <Divider />
    </>
    
   )
}

const styles = StyleSheet.create({

    leftContainer: {
        padding: 5,
        justifyContent: 'space-between',
        height: '100%'
    },

    rightContainer: {
        flex: 4,
        padding: 5
    },

    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingRight: 10,
        paddingTop: 6
    },

    userInfos: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '90%',
        marginLeft: -5
    },

    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    content:{
        width: '95%',
        marginTop: 5
    },
    reactions: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: 10,
    },

    image: {
        width: "100%",
        borderRadius: 10,
        marginTop: 15
    },
})

export default FeedCard

{/* <>
    <View style={styles.container}>
        <View style={styles.shadowProp}>
            <View style={styles.container1}>
                <ProfilPicture source={avatarSource} onPress={() => console.log('Go to user Profil')} size={70} />
                <View style={{
                    flexDirection: 'row',
                    flex: 2
                }}>
                    <View>
                        <Text style={styles.userName}> @{userName}</Text>
                        <Text> {publicationTime}
                            <Entypo name="dot-single" size={13} color="black" />
                            <MaterialCommunityIcons name="earth" size={13} color={colors.primary} />
                        </Text>
                    </View>
                </View>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                }}>
                    <MaterialIcons name="more-horiz" size={28} color={colors.medium} />
                </View>
            </View>
            <Text>{textContent}</Text>
            {imageSource &&
                <View style={styles.container3}>
                    <Image source={imageSource} style={styles.image} />
                </View>}
            <View style={styles.container4}>
                <View style={{
                    flex: 2,
                    justifyContent: 'space-around'
                }}>
                    <View style={{ flexDirection: 'row' }}>
                        <MaterialCommunityIcons name="check-bold" size={18} color={colors.medium} />
                        <Text> {nbLikes}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <MaterialCommunityIcons name="comment" size={18} color={colors.medium} />
                        <Text> {nbComments}</Text>
                    </View>
                </View>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    padding: 5
                }}>
                    <MaterialCommunityIcons name={outline ? "check-circle-outline" : "check-circle"} size={40} color={colors.primary} onPress={handleClick} />
                    <Divider orientation="vertical" />
                    <MaterialCommunityIcons name={"comment-arrow-right-outline"} size={40} color={colors.primary} />
                </View>
            </View>
        </View>
    </View>
    <Divider />
</> */}