import { StatusBar } from 'expo-status-bar'
import { View, Text } from 'react-native'
import React, { useState } from 'react';
import stylesScreen from './style/screens.style';
import styles from './style/Settings.style';
import { TopBar } from '../components/TopBar';
import { ButtonGreySmall } from '../components/ButtonGreySmall';
import { PickerGreySmall } from '../components/PickerGreySmall';
import { useUserStore } from '../context/userContext';
import DialogInput from 'react-native-dialog-input';
import UserModificationManager from '../core/User/userModificationManager';
import { MANAGER_USER } from '../../appManagers';

function Settings(props: { navigation: any; }) {
    const { navigation } = props

    const setUser = useUserStore((state) => state.setUser);



    const [dialogPseudoVisible, setDialogPseudoVisible] = useState(false);
    const [dialogPasswordVisible, setDialogPasswordVisible] = useState(false);

    const [selectedSex, setSelectedSex] = useState("");
    const [selectedNationality, setSelectedNationality] = useState("");


    async function changeUsername(username:string){
      let userManager = new UserModificationManager();
      let tmp=MANAGER_USER.getCurrentUser();
      if (tmp!=null){
        await userManager.changeUsername(tmp, username);
        setUser(tmp);
        MANAGER_USER.setCurrentUser(tmp);
      }
    }

    async function changePassword(password:string){
      let userManager = new UserModificationManager();
      let tmp=MANAGER_USER.getCurrentUser();
      if (tmp!=null){
        await userManager.changePassword(tmp, password);
        setUser(tmp);
        MANAGER_USER.setCurrentUser(tmp);
      }
    }

    async function changeSexe(sexe:string){
      let userManager = new UserModificationManager();
      let tmp=MANAGER_USER.getCurrentUser();
      if (tmp!=null && sexe != null){
        await userManager.changeSexe(tmp, sexe);
        setUser(tmp);
        MANAGER_USER.setCurrentUser(tmp);
      }
    }

    async function changeNationality(nationality:string){
      let userManager = new UserModificationManager();
      let tmp=MANAGER_USER.getCurrentUser();
      if (tmp!=null && nationality != null){
        await userManager.changeNationality(tmp, nationality);
        setUser(tmp);
        MANAGER_USER.setCurrentUser(tmp);
      }
    }


    return (
    <View style={stylesScreen.container}>
      <TopBar
          nav={navigation}
          state='settings'
        />
      <View style={stylesScreen.bodyStartCenter}>
        <Text style={styles.title}>Informations du Joueur</Text>
        <View style={styles.infoView}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
            <View>
              <View>
                <Text style={styles.text}>Pseudo: {useUserStore().user?.getUsername()}</Text>
                <ButtonGreySmall onPress={() => {console.log(dialogPseudoVisible);
                ;setDialogPseudoVisible(true)}} title='Changer le pseudo'/>
              </View>
              <View>
                <Text style={styles.text}>Mot de passe: {useUserStore().user?.getPassword()}</Text>
                <ButtonGreySmall onPress={() => setDialogPasswordVisible(true) } title='Changer le mot de passe'/>
              </View>
              <View>
                <Text style={styles.text}>Nationalité: {useUserStore().user?.getNationality()}</Text>
                <PickerGreySmall title='Selectionner un pays' valueChange={(value:string) => setSelectedNationality(value)} donePress={() => changeNationality(selectedNationality)} values={[ { label: 'France', value: 'Francais(e)' }, { label: 'Royaume-Uni', value: 'Anglais(e)' }, { label: 'Espagne', value: 'Espagnol(e)' }, { label: 'Belgique', value: 'Belge' }, { label: 'Allemagne', value: 'Allemand(e)' }, ]}/>
              </View>
              <View>
                <Text style={styles.text}>Sexe: {useUserStore().user?.getSexe()}</Text>
                <PickerGreySmall title='Selectionner le sexe' valueChange={(value:string) => setSelectedSex(value)} donePress={() => changeSexe(selectedSex)} values={[ { label: 'Homme', value: 'Homme' }, { label: 'Femme', value: 'Femme' }, {label: 'Autre', value: 'Autre' } ]} />
              </View>
            </View>
            <Text style={styles.textID}>ID: {useUserStore().user?.getId()}</Text>
          </View>
        </View>
      </View>

      <DialogInput
        isDialogVisible={dialogPseudoVisible}
        title="Inserer le nouveau pseudo"
        hintInput ="Pseudo"
        submitInput={ (inputText: string) => { changeUsername(inputText); setDialogPseudoVisible(false)} }
        closeDialog={ () => {setDialogPseudoVisible(false)}}>
      </DialogInput>

      <DialogInput 
        isDialogVisible={dialogPasswordVisible}
        title="Inserer le nouveau mot de passe"
        hintInput ="Mot de passe"
        submitInput={ (inputText: string) => { changePassword(inputText); setDialogPasswordVisible(false)} }
        closeDialog={ () => {setDialogPasswordVisible(false)}}>
          
      </DialogInput>

    </View>
  );
}

export default Settings