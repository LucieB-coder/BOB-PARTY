import { StatusBar } from 'expo-status-bar'
import { View, Pressable, Text, Alert} from 'react-native'
import React, { useCallback, useState } from 'react';
import stylesScreen from './style/screens.style'
import { TextInput } from 'react-native-gesture-handler';
import styles from "./style/SignIn.style";
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/features/currentUserSlice';
import { RootState } from '../redux/store';
import { updateIncorrectCredentials } from '../redux/features/credentialErrorsSlice';
import Dialog from "react-native-dialog";
import { MANAGER_USER } from '../../App';
import { useUserStore } from '../../userContext';




function SignIn(props: { navigation: any; }) {
    const { navigation } = props
    const setUser = useUserStore((state) => state.setUser);

    const errorList = useSelector((state: RootState) => state.credentialErrors.loginErrorList);

    const [pseudo, setPseudo] = useState('');
    const [password, setPassword] = useState('');
    const dispatch=useDispatch();

   if (errorList.incorrectCredentials){
            Alert.alert("Pseudo ou Mot de passe incorrect");
            dispatch(updateIncorrectCredentials(true));
    }


    const handleUserConnect = useCallback(async (pseudo: string, password: string) => {
        
        const us =await MANAGER_USER.getLoaderUser().loadByUsernamePassword(pseudo, password).then((res) => {      
            if (res!=null){
                MANAGER_USER.setCurrentUser(res);
                navigation.navigate('HomeTab');
                setUser(MANAGER_USER.getCurrentUser());
            }
            else{
                console.log("wesh c'est null");
            }
          });

      }, []);
    
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
        <Dialog.Container visible={false}>
            <Dialog.Title>Ce pseudo n'exsite pas</Dialog.Title>
            <Dialog.Button label="Fermer" onPress={() => dispatch(updateIncorrectCredentials(false))} />
        </Dialog.Container>
        <Dialog.Container visible={false}>
            <Dialog.Title>Mot de passe incorrect</Dialog.Title>
            <Dialog.Button label="Fermer" onPress={() => dispatch(updateIncorrectCredentials(false))} />
        </Dialog.Container>
    </View>
    
  );
}

export default SignIn
