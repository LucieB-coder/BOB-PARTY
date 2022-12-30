import { FC, ReactNode, useCallback } from "react"
import { Pressable, Image, ImageStyle, Text, View, Alert, ImageSourcePropType, TextStyle } from "react-native"
import React from "react"
import { Skin } from "../core/skin"

/*
    Importing the correct stylesheet
*/
import styles from "./style/Skin.style"
import { useDispatch, useSelector } from "react-redux"
import { useUserStore } from "../context/userContext"
import { UserCoinsModifier } from "../core/User/userCoinsModifier"
import UserSkinModifier from "../core/User/userSkinModifier"
import { useStoreStore } from "../context/storeContext"
import { MANAGER_SKIN, MANAGER_USER } from "../../appManagers"




export const SkinComponent:



    /* Parameters : 
        * skin : Skin to be displayed
        * state : Indicates from wich screen the component has been called
    */
    FC<{  skin: Skin, state: String, nav?: any,}> =
    ({ nav, skin, state }) => {

        const navigation = nav;

        const dispatch = useDispatch();

        const setUser = useUserStore((state) => state.setUser);

        const setTabSkin = useStoreStore((state) => state.setTabSkin);


        async function changerSkin(skin: Skin) {
            const m = new UserSkinModifier();
            const tmp = MANAGER_USER.getCurrentUser();
            if (tmp !== null) {
                await m.changeCurrentSkin(tmp, skin);
                setUser(tmp);
                MANAGER_USER.setCurrentUser(tmp);
            }
        }

        const handleStoreChange = useCallback(async () => {

            let tabSkinStore = [...MANAGER_SKIN.getTabSkin()];
            MANAGER_USER.getCurrentUser()?.getTabSkin()?.forEach(skin => {
                for (let i = 0; i < tabSkinStore.length; i++) {
                    if (skin.isEqual(tabSkinStore[i])) {
                        tabSkinStore.splice(i, 1);
                    }
                }
            });
            setTabSkin(tabSkinStore);
        }, []);

        async function buySkin(skin: Skin) {
            const mSkin = new UserSkinModifier();
            const mCoins = new UserCoinsModifier();
            const tmp = MANAGER_USER.getCurrentUser();
            if (tmp !== null) {

                await mCoins.removeCoins(tmp, skin.getSkinCost()).then(async (res) => {
                    if (res == true) {
                        await mSkin.addSkin(tmp, skin);
                        setUser(tmp);
                        MANAGER_USER.setCurrentUser(tmp);
                        Alert.alert("Achat du skin");
                        handleStoreChange();
                    }
                    else {
                        Alert.alert("Pas assez d'argent pour acheter le skin");
                    }
                });
            }

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
                        <Image source={{ uri: skin.getSkinSource() }} style={styles.icon} />
                    </View>
                )

            case 'shop':
                return (
                    <Pressable onPress={() => buySkin(skin)} style={styles.imageWrapper}>
                        <Text style={styles.nomSkin}>{skin.getSkinName()}</Text>
                        <Image
                            style={styles.imageSkin}
                            source={{ uri: skin.getSkinSource() }}
                        />
                        <Text style={styles.nomSkin}>100€</Text>
                    </Pressable>
                )
            case 'liste':
                return (
                    <Pressable onPress={() => { changerSkin(skin); navigation.goBack() }} style={styles.imageWrapper}>
                        <Text style={styles.nomSkin}>{skin.getSkinName()}</Text>
                        <Image
                            style={styles.imageSkin}
                            source={{ uri: skin.getSkinSource() }}
                        />
                    </Pressable>
                )
            case 'profile':
                return (
                    <Pressable onPress={() => Alert.alert("cool")} style={styles.imageWrapperProfil}>
                        <Text style={styles.nomSkin}>{skin.getSkinName()}</Text>
                        <Image
                            style={styles.imageSkin}
                            source={{ uri: skin.getSkinSource() }}
                        />
                    </Pressable>
                )
            default:
                return (
                    <Image
                        style={styles.imageSkin}
                        source={{ uri: skin.getSkinSource() }}
                    />
                )
        }
    }