import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native'

import NotifCard from '../../components/NotificationCard/NotifCard';
import Screen from '../../components/Screen'
import colors from '../../config/colors';

const notifications = [
    {
        id: 1,
        notifContent: "Avatars are found all over ui design from lists to profile screens. They are commonly used to represent",
        notifTime: "6h",
        avatarSource: require('../../assets/maxime.jpg')
    },
    {
        id: 2,
        notifContent: "Avatars are found all over ui design from lists to profile screens. They are commonly used to represent",
        notifTime: "10h",
        avatarSource: require('../../assets/maxime.jpg')
    },
    {
        id: 3,
        notifContent: "Avatars are found all over ui design from lists to profile screens. They are commonly used to represent",
        notifTime: "11h",
        avatarSource: require('../../assets/maxime.jpg')
    },
    {
        id: 4,
        notifContent: "Avatars are found all over ui design from lists to profile screens. They are commonly used to represent",
        notifTime: "17h",
        avatarSource: require('../../assets/maxime.jpg')
    },
    {
        id: 5,
        notifContent: "Avatars are found all over ui design from lists to profile screens. They are commonly used to represent",
        notifTime: "21h",
        avatarSource: require('../../assets/maxime.jpg')
    },
]

const NotifsScreen = () => {
    return (
        <Screen>
            <View style={styles.container}>
                <FlatList
                    data={notifications}
                    keyExtractor={notifs => notifs.id.toString()}
                    renderItem={({ item }) => (
                        <NotifCard
                            source={item.avatarSource}
                            content={item.notifContent}
                            time={item.notifTime}
                            onPress={() => console.log("Ceci est la notification avec l'id " + item.id)}
                            onPressAvatar={() => console.log("redirige vers le profil à l'id " + item.id)}
                        />

                    )}
                />
            </View>
        </Screen>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1
    },
})
export default NotifsScreen