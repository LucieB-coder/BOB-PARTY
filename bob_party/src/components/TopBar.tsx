import { FC, ReactNode } from "react"
import { Pressable, Image, Text, View} from "react-native"
import { Skin } from "../core/Skin"
import React from "react"
import { SkinComponent } from "./skinAvatar"
import styles from './style/TopBar.style';


const engrenage = require('../../assets/Icons/UnSelected/Cogs.png');
const cross = require('../../assets/Icons/UnSelected/Cross.png');
const msc = require('../../assets/Icons/FondGris.png');

export const TopBar : FC<{skin?: Skin, nav: any, state?: string}> = ({skin, nav, state}) => 
{
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
                    <Pressable onPress={() => nav.navigate('ProfileTab')}>
                            <SkinComponent skin={skin} children={styles.avatar} />
                        </Pressable>
                        <Text style={styles.titre}>BOB PARTY</Text>
                        <Pressable onPress={() => nav.navigate('Settings')}>
                            <Image source={engrenage} style={styles.icon}/>
                        </Pressable>
                </View>
            )
    }
}