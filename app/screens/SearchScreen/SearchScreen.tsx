import React, { useState } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'


import SearchInputField from '../../components/SearchInputField/SearchInputField'
import Screen from '../../components/Screen'
import SearchCard from '../../components/SearchCard/SearchCard'
import colors from '../../config/colors'
import routes from '../../navigation/routes'
import { AuthRoutesParams } from '../../navigation/AuthNavigator'
import { SearchRoutesParams } from '../../navigation/SearchNavigator'

const data = [
    {
        id: 1,
        title: "Maxime PSG",
        url: require('../../assets/maxime.jpg')
    },
    {
        id: 2,
        title: "Rudy Bowling",
        url: require('../../assets/rudy.jpg')
    },
    {
        id: 3,
        title: "Francis Nga",
        url: require("../../assets/francis.png")
    },
    {
        id: 4,
        title: "Farid le F",
        url: require('../../assets/farid.png')
    },
    {
        id: 5,
        title: "Marcooo",
        url: require("../../assets/verratti.png")
    },
    {
        id: 6,
        title: "Teddy Parabarap",
        url: require('../../assets/teddy.png')
    },
    {
        id: 7,
        title: "Yohan Paltime",
        url: require("../../assets/yohan.jpg")
    },
    {
        id: 8,
        title: "Yohan Boula Z",
        url: require("../../assets/moichauve.jpg")
    },

]

const SearchScreen = () => {
    const [isSearchInputFocus, setIsSearchInputFocus] = useState<boolean>(false)
    const navigation = useNavigation<NativeStackNavigationProp<SearchRoutesParams>>()
    return (
        <Screen style={styles.screen}>
                
            <FlatList
            onScroll={() => setIsSearchInputFocus(false)}
            ListHeaderComponent={
                <View style={styles.icons}>
                    <SearchInputField placeholder="Rechercher un profil" />
                </View>
            }
            horizontal={false}
            numColumns={2}
            data={data}
            keyExtractor={listing => listing.id.toString()}
            renderItem={({ item }) => (
                <SearchCard
                    userName={item.title}
                    imageUri={item.url}
                    onPressInfos={() => navigation.navigate(routes.PROFIL)}
                    />
            )} 
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    flatlist: {
    },
    icons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: 5
        
    },
    screen: {
        paddingLeft: 5,
        paddingRight: 5,
        backgroundColor: colors.white,
    }
})

export default SearchScreen