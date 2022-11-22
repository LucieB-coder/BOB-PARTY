import { FC, ReactNode } from "react"
import { Pressable, Image, Text, View} from "react-native"
import { Skin } from "../core/Skin"
import React from "react"
import { SkinComponent } from "./Skin"
import { User } from "../core/User/user"

/*
    Import the correct stylesheet
*/
import styles from './style/TopBar.style';
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"

/* 
    Images required
*/
const engrenage = require('../../assets/Icons/UnSelected/Cogs.png');
const cross = require('../../assets/Icons/UnSelected/Cross.png');
const msc = require('../../assets/Icons/FondGris.png');

export const TopBar : 
/* Parameters: 
    * skin : optional skin to display
    * nav : tool needed to allow the navigation between the screens
    * state :  optional parameter that indicates from which screen the component has been called
        (the string must be the name of the screen)
*/
FC<{nav: any, state?: string}> = 
({nav, state}) => 
{

    const currentUser = useSelector((state: RootState) => state.currentUserManager.currentUser);

    /* The display of this component depends of the screen from where it has been called:
        * From the Settings (icon) : Name of the page + cross button
        * From other : skin + Title + parameters icon
    */
    switch (state) {
        case 'settings':
            return (
                <View style={styles.header}>
                    <Pressable>
                        <Image source={msc} style={styles.icon}/>
                    </Pressable>
                    <Text style={styles.titre}>BOB PARTY</Text>
                    <Pressable onPress={() => nav.goBack()}>
                        <Image source={cross} style={styles.icon}/>
                    </Pressable>
                </View>
            )
        default:
            return (
                <View style={styles.header}>
                    <Pressable onPress={() => nav.navigate('ProfileTab', {screen: 'Profile'})}>
                            <SkinComponent skin={currentUser.getCurrentSkin()} state='icon' />
                        </Pressable>
                        <Text style={styles.titre}>BOB PARTY</Text>
                        <Pressable onPress={() => nav.navigate('Settings')}>
                            <Image source={engrenage} style={styles.icon}/>
                        </Pressable>
                </View>
            )
    }
}