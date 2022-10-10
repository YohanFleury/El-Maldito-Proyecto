import React from 'react'
import { View, StyleSheet, Text, TouchableWithoutFeedback} from 'react-native'
import { NotifCardProps } from './NotifCard-types'
import { Divider, Avatar } from 'react-native-elements'

import colors from '../../config/colors'
import ProfilPicture from '../UserPictures/ProfilPicture'


const NotifCard = ({ content, time, onPress, onPressAvatar, source }: NotifCardProps) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View>
                <Divider />
                <View style={styles.container}>
                    <View style={styles.avatar}>
                        <ProfilPicture size={65} source={source} onPress={onPressAvatar} />
                    </View>
                    <View style={styles.content}>
                        <Text style={{color: colors.medium}}>{content}</Text>
                    </View>
                    <View style={styles.time}>
                        <Text style={styles.timeText}>{time}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-evenly'
    },
    avatar: {
        padding: 5,
    },
    content: {
        padding: 5,
        width: '75%',
    },
    time: {
        padding: 5,
    },
    timeText: {
        color: colors.medium
    }
})
export default NotifCard