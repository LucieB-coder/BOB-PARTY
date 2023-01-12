import { StatusBar } from 'expo-status-bar'
import { View, Pressable, Text, Alert} from 'react-native'
import React, { useCallback, useState } from 'react';
import stylesScreen from './style/screens.style'
import { TextInput } from 'react-native-gesture-handler';
import styles from "./style/SignIn.style";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { updateIncorrectCredentials } from '../redux/features/credentialErrorsSlice';
import Dialog from "react-native-dialog";
import { useUserStore } from '../context/userContext';
import { MANAGER_CONVERSATION, MANAGER_GAME, MANAGER_MATCH, MANAGER_SKIN, MANAGER_USER } from '../../appManagers';
import { socket } from "../../socketConfig";
import { useConversationStore } from '../context/conversationContext';
import { useGameStore } from '../context/gameContext';
import { Conversation } from '../core/conversation';
import { useSkinStore } from '../context/storeContext';




function SignIn(props: { navigation: any; }) {
    const { navigation } = props
    const setUser = useUserStore((state) => state.setUser);

    const setTabConv = useConversationStore((state) => state.setTabConv);
    const setCurrentConv = useConversationStore((state) => state.setCurrentConv);
    
    const setTabGame = useGameStore((state) => state.setTabGame);
    const setTabGameSolo = useGameStore((state) => state.setTabGameSolo);
    const setTabGameMulti = useGameStore((state) => state.setTabGameMulti);

    const setTabSkin = useSkinStore((state) => state.setTabSkin);

    const [waitConnect, setWaitConnect] = useState(0);



    const errorList = useSelector((state: RootState) => state.credentialErrors.loginErrorList);
    const [pseudo, setPseudo] = useState('');
    const [password, setPassword] = useState('');    


    async function handleUserConnect(username: string, password: string){
        
        if (waitConnect==0){
            setWaitConnect(-1);

            await MANAGER_USER.getLoaderUser().loadByUsernamePassword(username, password).then(async (res) => { 
                if (res!=null){
                    MANAGER_USER.setCurrentUser(res);
                    setUser(MANAGER_USER.getCurrentUser());
                    await handleSkinLoad();
                    await handleConversationLoad();
                    await handleGameLoad();
                    initSocket();

                    socket.on("messageReceived", async () =>{
                        await handleConversationLoad();
                    });
                    setPseudo("");
                    setPassword("");
                    navigation.navigate('HomeTab');   
                    setWaitConnect(0);
                }
                else{
                    Alert.alert("Incorrect Username or Password");
                    setPseudo("");
                    setPassword("");
                    setWaitConnect(0);
                }

            });
        }
        return;      
    }

    function initSocket(){
        socket.emit("signIn", MANAGER_USER.getCurrentUser()?.id);
        MANAGER_CONVERSATION.getTabConv()?.forEach( conv =>{
            socket.emit("inConv", conv);
        });
        socket.on("messageReceived", async () =>{
            await handleConversationLoad();
        });
        socket.on("addedToConv", async (conv) =>{
            socket.emit("inConv", conv);
            await handleConversationLoad();
        });
    }
    
      async function handleConversationLoad(){
        const tmp = MANAGER_USER.getCurrentUser();
        if (tmp !== null) {
            await MANAGER_CONVERSATION.getLoaderConversation().loadByUser(tmp).then((res) => {
                const tmp=MANAGER_USER.getCurrentUser()
                MANAGER_CONVERSATION.setTabConv(res);
                if (tmp!==null){
                  const tmpConv=MANAGER_CONVERSATION.getCurrentConv();
                  if (tmpConv!==null){
                    const trouveIndex = (element: Conversation) => element.getId()===tmpConv.getId();
                    const index=MANAGER_CONVERSATION.getTabConv().findIndex(trouveIndex);
                    MANAGER_CONVERSATION.setCurrentConv(MANAGER_CONVERSATION.getTabConv()[index]);
                    setCurrentConv(MANAGER_CONVERSATION.getCurrentConv());
                  }
                  setTabConv(MANAGER_CONVERSATION.getTabConv());
                }
            });
        }
      }

    async function handleSkinLoad(){
        MANAGER_SKIN.setTabSkin(await MANAGER_SKIN.getLoaderSkin().loadAllSkin());
        setTabSkin(MANAGER_SKIN.getTabSkin());
    }

    async function handleGameLoad(){
        MANAGER_GAME.setTabGame(await MANAGER_GAME.getLoaderGame().loadAllGames());
        MANAGER_GAME.getTabGame().forEach(game => {
            if (game.getNbPlayerMin()>1){
                MANAGER_GAME.getTabGameMulti().push(game);
            }
            else{
                MANAGER_GAME.getTabGameSolo().push(game);
            }
        });
        setTabGame(MANAGER_GAME.getTabGame());
        setTabGameMulti(MANAGER_GAME.getTabGameMulti())
        setTabGameSolo(MANAGER_GAME.getTabGameSolo());
    }

    



    


    return (
    <View style={stylesScreen.container}>
        <View style={stylesScreen.bodyCenter}>
            <TextInput style={styles.textInput} placeholder='Login' 
            value={pseudo}
            onChangeText={(val) => setPseudo(val)} autoCapitalize='none' />
            <TextInput style={styles.textInput} placeholder='Password' 
            value={password}
            onChangeText={(val) => setPassword(val)} autoCapitalize='none' 
            secureTextEntry={true}/>
            <Pressable style={styles.button} onPress={() => handleUserConnect(pseudo, password)}>
                <Text style={styles.text}>Se connecter</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.textLink}>Pas de compte? Inscrivez vous !</Text>
            </Pressable>
        </View>
        {/*
        <Dialog.Container visible={false}>
            <Dialog.Title>Ce pseudo n'exsite pas</Dialog.Title>
            <Dialog.Button label="Fermer" onPress={() => dispatch(updateIncorrectCredentials(false))} />
        </Dialog.Container>
        <Dialog.Container visible={false}>
            <Dialog.Title>Mot de passe incorrect</Dialog.Title>
            <Dialog.Button label="Fermer" onPress={() => dispatch(updateIncorrectCredentials(false))} />
        </Dialog.Container>
*/}
    </View>
    
  );
}

export default SignIn
