import { StatusBar } from 'expo-status-bar'
import { View, Text } from 'react-native'
import React, { useState } from 'react';
import stylesScreen from './style/screens.style';
import styles from './style/Settings.style';
import { TopBar } from '../components/TopBar';
import { ButtonGreySmall } from '../components/ButtonGreySmall';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import Dialog from "react-native-dialog"
import RNPickerSelect from "react-native-picker-select";
import { PickerGreySmall } from '../components/PickerGreySmall';
import { MANAGER_USER } from '../../App';
import { useUserStore } from '../../userContext';

function Settings(props: { navigation: any; }) {
    const { navigation } = props
    const setUser = useUserStore((state) => state.setUser);



    const [dialogPseudoVisible, setDialogPseudoVisible] = useState(false);
    const [dialogPasswordVisible, setDialogPasswordVisible] = useState(false);

    const [selectedSex, setSelectedSex] = useState("");
    const [selectedNationality, setSelectedNationality] = useState("");


    function changeUsername(username:string){
      MANAGER_USER.getCurrentUser()?.setUsername(username);
      console.log(MANAGER_USER.getCurrentUser()?.getUsername());
      setUser(MANAGER_USER.getCurrentUser());
      MANAGER_USER.getsaverUser().updateUser(MANAGER_USER.getCurrentUser());
    }

    function changePassword(password:string){
      MANAGER_USER.getCurrentUser()?.setPassword(password);
      console.log(MANAGER_USER.getCurrentUser()?.getPassword());
      setUser(MANAGER_USER.getCurrentUser());
      MANAGER_USER.getsaverUser().updateUser(MANAGER_USER.getCurrentUser());
    }

    const dispatch=useDispatch();

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
                <Text style={styles.text}>Pseudo: {MANAGER_USER.getCurrentUser().getUsername()}</Text>
                <ButtonGreySmall onPress={() => setDialogPseudoVisible(true)} title='Changer le pseudo'/>
              </View>
              <View>
                <Text style={styles.text}>Mot de passe: {MANAGER_USER.getCurrentUser().getPassword()}</Text>
                <ButtonGreySmall onPress={() => setDialogPasswordVisible(true) } title='Changer le mot de passe'/>
              </View>
              <View>
                <Text style={styles.text}>Nationalité: {MANAGER_USER.getCurrentUser().getNationality()}</Text>
                <PickerGreySmall title='Changer la nationalité' valueChange={(value:string) => setSelectedNationality(value)} donePress={() => dispatch(updateNationality(selectedNationality))} values={["Francais", "Anglais"]} />
              </View>
              <View>
                <Text style={styles.text}>Sexe: {MANAGER_USER.getCurrentUser().getSexe()}</Text>
                <PickerGreySmall title='Changer le sexe' valueChange={(value:string) => setSelectedSex(value)} donePress={() => dispatch(updateSex(selectedSex))} values={["Homme", "Femme", "Autre"]} />
              </View>
            </View>
            <Text style={styles.textID}>ID: {MANAGER_USER.getCurrentUser().getId()}</Text>
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

      <Dialog.Container visible={dialogNationalityVisible}>
        <Dialog.Title>Changer de nationalité</Dialog.Title>
        <View style={styles.RNPView}>
          <RNPickerSelect
            placeholder={{label:"Cliquez pour changer", value: null}}
            onValueChange={(value:string) => setSelectedNationality(value)}
            items={tabNat}
          />
        </View>  
        <Dialog.Button label="Cancel" onPress={() => setDialogNationalityVisible(false)} />
        <Dialog.Button label="Valider" onPress={() => { setDialogNationalityVisible(false)}} />
      </Dialog.Container>

      <Dialog.Container visible={dialogSexVisible}>
        <Dialog.Title>Changer de sexe</Dialog.Title>
        <View style={styles.RNPView}>
          <RNPickerSelect
            placeholder={{label:"Cliquez pour changer", value: null}}
            onValueChange={(value:string) => setSelectedSex(value)}
            items={tabSex}
          />
        </View>  
        <Dialog.Button label="Cancel" onPress={() => setDialogSexVisible(false)} />
        <Dialog.Button label="Valider" onPress={() => { setDialogSexVisible(false)}} />
      </Dialog.Container>

    </View>
  );
}

export default Settings