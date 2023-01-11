import { FC, ReactNode } from "react"
import { Pressable, Image, Text, View, Platform} from "react-native"
import { Skin } from "../core/Skin"
import React from "react"
import { SkinComponent } from "./SkinComponent"
import { User } from "../core/User/user"

/*
    Import the correct stylesheet
*/
import styles from './style/TopBar.style';
import { useMatchStore } from "../context/matchContext"
import { MANAGER_CONVERSATION, MANAGER_MATCH, MANAGER_USER } from "../../appManagers"
import { useUserStore } from "../context/userContext"
import { useConversationStore } from "../context/conversationContext"
import { socket } from "../../socketConfig"
import { Conversation } from "../core/conversation"
import MatchModifier from "../core/Match/matchModifier"
import { getStatusBarHeight } from 'react-native-status-bar-height';
 
// 44 - on iPhoneX
// 20 - on iOS device
// X - on Android platfrom (runtime value)
// 0 - on all other platforms (default)

function topBarTopDistance(){
    if(Platform.OS === 'ios'){
        return{
            paddingTop : getStatusBarHeight(),
            paddingBottom : getStatusBarHeight()/2.5,
        }
    }
    return{
        paddingTop : 20,
        flex: 0.15,
    }
}



/* 
    Images required
*/
const engrenage = require('../../assets/Icons/UnSelected/Cogs.png');
const cross = require('../../assets/Icons/UnSelected/Cross.png');
const msc = require('../../assets/Icons/FondGris.png');
const door = require('../../assets/Icons/UnSelected/Door.png');

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
    
    const resetMatch = useMatchStore((state) => state.resetMatch);
    const resetTabUserMatch = useMatchStore((state) => state.resetTabUser);

    const resetCurrentConv = useConversationStore((state) => state.resetCurrentConv);

    const setTabConv = useConversationStore((state) => state.setTabConv);



    async function quitConv(){
        const tmp=MANAGER_USER.getCurrentUser();
        const tmpConv=MANAGER_CONVERSATION.getCurrentConv();
        if (tmp!==null && tmpConv!==null){
            await MANAGER_CONVERSATION.getsaverConversation().deleteUserToConversation(tmpConv, tmp);
            const trouveIndex = (element: Conversation) => element.getId()===tmpConv.getId();
            const index=MANAGER_CONVERSATION.getTabConv().findIndex(trouveIndex);
            MANAGER_CONVERSATION.getTabConv().splice(index, 1);
            if (tmpConv.getTabUser().length===1){
                await MANAGER_CONVERSATION.getsaverConversation().deleteConversation(tmpConv);
            }
            MANAGER_CONVERSATION.setCurrentConv(null);
            setTabConv(MANAGER_CONVERSATION.getTabConv());
            socket.emit("messageSent", tmpConv);
            socket.emit("quitConv", tmpConv);   
            nav.goBack();
        }
    }

    async function clickQuitMatch(){
        const tmp=MANAGER_USER.getCurrentUser();
        const tmpMatch=MANAGER_MATCH.getCurrentMatch();
        const m=new MatchModifier();
        if (tmp!==null && tmpMatch!==null){
            socket.emit("quitMatch", tmpMatch);
            socket.off("M" + tmpMatch.code);
            await m.quitMatch(tmp, tmpMatch);
            resetMatch();
            resetTabUserMatch();
            MANAGER_MATCH.setCurrentMatch(null);
        }
    }

    /* The display of this component depends of the screen from where it has been called:
        * From the Settings (icon) : Name of the page + cross button
        * From other : skin + Title + parameters icon
    */
    switch (state) {
        case 'settings':
            return (
                <View style={[styles.header,topBarTopDistance()]}>
                    <Pressable>
                        <Image source={msc} style={styles.icon}/>
                    </Pressable>
                    <Text style={styles.titre}>BOB PARTY</Text>
                    <Pressable onPress={() => nav.goBack()}>
                        <Image source={cross} style={styles.icon}/>
                    </Pressable>
                </View>
            )

        case 'matchmacking'|| 'game':
            return (
                <View style={[styles.header,topBarTopDistance()]}>
                    <Pressable>
                        <Image source={msc} style={styles.icon}/>
                    </Pressable>
                    <Text style={styles.titre}>BOB PARTY</Text>
                    <Pressable onPress={() => { clickQuitMatch(); nav.goBack()}}>
                        <Image source={cross} style={styles.icon}/>
                    </Pressable>
                </View>
            )

        case 'conversation':
            return (
                <View style={[styles.header,topBarTopDistance()]}>
                    <Pressable onPress={() => { resetCurrentConv(); MANAGER_CONVERSATION.setCurrentConv(null); nav.goBack()}}>
                        <Image source={cross} style={styles.icon}/>
                    </Pressable>
                    <Text style={styles.titre}>{useConversationStore().currentConv?.getName()}</Text>
                    <Pressable onPress={ () => quitConv()}>
                        <Image source={door} style={styles.icon}/>
                    </Pressable>
                </View>
            )
        case 'addConversation':
            return (
                <View style={[styles.header,topBarTopDistance()]}>
                    <Pressable onPress={() => {nav.goBack()}}>
                        <Image source={cross} style={styles.icon}/>
                    </Pressable>
                    <Text style={styles.titre}>Chat with your friends</Text>
                    <Pressable>
                        <Image source={msc} style={styles.icon}/>
                    </Pressable>
                </View>
            )

        default:
            return (
                <View style={[styles.header,topBarTopDistance()]}>
                    <Pressable onPress={() => nav.navigate('ProfileTab', {screen: 'Profile'})}>
                            <SkinComponent skin={useUserStore().user?.getCurrentSkin()} state='icon' nav={nav} />
                        </Pressable>
                        <Text style={styles.titre}>BOB PARTY</Text>
                        <Pressable onPress={() => nav.navigate('Settings')}>
                            <Image source={engrenage} style={styles.icon}/>
                        </Pressable>
                </View>
            )
    }
}


// {   Platform.OS === 'ios' && (
//     <View style={{paddingTop: "4%", width: "100%", backgroundColor:"#2E2C34"}}></View>
//   )}