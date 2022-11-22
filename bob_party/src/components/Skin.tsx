import { FC, ReactNode } from "react"
import { Pressable, Image, ImageStyle, Text, View, Alert, ImageSourcePropType, TextStyle } from "react-native"
import React from "react"
import { Skin } from "../core/skin"

/*
    Importing the correct stylesheet
*/
import styles from "./style/Skin.style"
import { useDispatch, useSelector } from "react-redux"
import { loginUser } from "../redux/features/currentUserSlice"
import { RootState } from "../redux/store"
import { MANAGER_USER } from "../../App"
import { useUserStore } from "../../userContext"




export const SkinComponent :



/* Parameters : 
    * skin : Skin to be displayed
    * state : Indicates from wich screen the component has been called
*/ 
FC<{nav : any, skin: Skin, state: String}> = 
({nav, skin, state}) => 
{

    console.log(nav);

    const dispatch=useDispatch();

    const setUser = useUserStore((state) => state.setUser);

    function changerSkin(skin:Skin) {
        MANAGER_USER.getCurrentUser()?.setCurrentSkin(skin);
        setUser(MANAGER_USER.getCurrentUser());
        MANAGER_USER.getsaverUser().updateUser(MANAGER_USER.getCurrentUser());
    }
    

    /* The display of this component depends of the screen from where it has been called:
        * From the TopBar (icon) : Small image in a circle
        * From the shop (shop) : Image + Name + Price, Pressable => Buy the skin
        * From the profile (profile) : Name + Image, Pressable => Change the skin
    */
    switch (state) {
        case 'icon':
            return (
                <View>
                    <Image source={skin.getSkinSource()} style={styles.icon}/>
                </View>
            )
        
        case 'shop':
            return(
                <Pressable onPress={() => Alert.alert("Achat du skin")} style={styles.imageWrapper}>
                    <Text style={styles.nomSkin}>{skin.getSkinName()}</Text>
                    <Image
                        style={styles.imageSkin}
                        source={skin.getSkinSource()}
                    />
                    <Text style={styles.nomSkin}>100€</Text>
                </Pressable>
            )
        case 'liste':
            return(
                <Pressable onPress={() => {changerSkin(skin); nav.navigate('ProfileTab', {screen: 'Profile'})}} style={styles.imageWrapper}>
                    <Text style={styles.nomSkin}>{skin.getSkinName()}</Text>
                    <Image
                        style={styles.imageSkin}
                        source={skin.getSkinSource()}
                    />
                </Pressable>
            )
        case 'profile':
            return(
                <Pressable onPress={() => Alert.alert("Achat du skin")} style={styles.imageWrapperProfil}>
                    <Text style={styles.nomSkin}>{skin.getSkinName()}</Text>
                    <Image
                        style={styles.imageSkin}
                        source={skin.getSkinSource()}
                    />
                </Pressable>
            )
        default:
            return(
                <Image
                        style={styles.imageSkin}
                        source={skin.getSkinSource()}
                />
            )
    }
}