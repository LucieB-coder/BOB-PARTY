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
import { MANAGER_CONVERSATION, MANAGER_USER } from '../../appManagers';
import { socket } from "../../socketConfig";
import { useConversationStore } from '../context/conversationContext';




function SignIn(props: { navigation: any; }) {
    const { navigation } = props
    const setUser = useUserStore((state) => state.setUser);
    const setTabConv = useConversationStore((state) => state.setTabConv);


    const errorList = useSelector((state: RootState) => state.credentialErrors.loginErrorList);
    const [pseudo, setPseudo] = useState('');
    const [password, setPassword] = useState('');
    const dispatch=useDispatch();

   if (errorList.incorrectCredentials){
            Alert.alert("Pseudo ou Mot de passe incorrect");
            dispatch(updateIncorrectCredentials(true));
    }

    let waitConnect=0;

    async function handleUserConnect(username: string, password: string){
        
        if (waitConnect==0){
            waitConnect=1;
            await MANAGER_USER.getLoaderUser().loadByUsernamePassword(username, password).then(async (res) => {   
                if (res!=null){
                    MANAGER_USER.setCurrentUser(res);
                    setUser(MANAGER_USER.getCurrentUser());
                    socket.emit("signIn", res);
                    await handleConversationLoad();
                    MANAGER_CONVERSATION.getCurrentTabConv()?.forEach( conv =>{
                        socket.emit("inConv", conv);
                        socket.emit("messageSent", conv);
                    });
                    navigation.navigate('HomeTab');                

                }

            });
            waitConnect=0;
        }
        return;      
    }

    async function handleConversationLoad(){
        const tmp = MANAGER_USER.getCurrentUser();
        if (tmp !== null) {
            await MANAGER_CONVERSATION.getLoaderConversation().loadByUser(tmp).then((res) => {
                MANAGER_CONVERSATION.setCurrentTabConv(res);
                setTabConv(res);
            });
        }
      }

    socket.on("messageReceived", () =>{
        console.log("Message reçu");
        handleConversationLoad();
    });


    return (
    <View style={stylesScreen.container}>
        <View style={stylesScreen.bodyCenter}>
            <TextInput style={styles.textInput} placeholder='Login' onChangeText={(val) => setPseudo(val)} autoCapitalize='none' />
            <TextInput style={styles.textInput} placeholder='Password' onChangeText={(val) => setPassword(val)} autoCapitalize='none' secureTextEntry={true}/>
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
