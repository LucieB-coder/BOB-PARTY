import { StatusBar } from 'expo-status-bar'
import { View, Text } from 'react-native'
import React, { useState } from 'react';
import stylesScreen from './style/screens.style';
import styles from './style/Settings.style';
import { TopBar } from '../components/TopBar';
import { ButtonGreySmall } from '../components/ButtonGreySmall';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import DialogInput from "react-native-dialog-input";
import { updatePseudo, updatePassword, updateNationality, updateSex } from "../redux/features/currentUserSlice";
import Dialog from "react-native-dialog"
import RNPickerSelect from "react-native-picker-select";
import tabNat from '../constNat';
import tabSex from '../constSex';
import { PickerGreySmall } from '../components/PickerGreySmall';

function Settings(props: { navigation: any; }) {
    const { navigation } = props

    const currentUser = useSelector((state: RootState) => state.currentUserManager.currentUser);

    const [dialogPseudoVisible, setDialogPseudoVisible] = useState(false);
    const [dialogPasswordVisible, setDialogPasswordVisible] = useState(false);

    const [selectedSex, setSelectedSex] = useState("");
    const [selectedNationality, setSelectedNationality] = useState("");

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
                <Text style={styles.text}>Pseudo: {currentUser.getUsername()}</Text>
                <ButtonGreySmall onPress={() => setDialogPseudoVisible(true)} title='Changer le pseudo'/>
              </View>
              <View>
                <Text style={styles.text}>Mot de passe: {currentUser.getPassword()}</Text>
                <ButtonGreySmall onPress={() => setDialogPasswordVisible(true)} title='Changer le mot de passe'/>
              </View>
              <View>
                <Text style={styles.text}>Nationalité: {currentUser.getNationality()}</Text>
                <PickerGreySmall title='Changer la nationalité' valueChange={(value:string) => setSelectedNationality(value)} donePress={() => dispatch(updateNationality(selectedNationality))} values={tabNat} />
              </View>
              <View>
                <Text style={styles.text}>Sexe: {currentUser.getSexe()}</Text>
                <PickerGreySmall title='Changer le sexe' valueChange={(value:string) => setSelectedSex(value)} donePress={() => dispatch(updateSex(selectedSex))} values={tabSex} />
              </View>
            </View>
            <Text style={styles.textID}>ID: {currentUser.getId()}</Text>
          </View>
        </View>
      </View>

      <DialogInput
        isDialogVisible={dialogPseudoVisible}
        title="Inserer le nouveau pseudo"
        hintInput ="Pseudo"
        submitInput={ (inputText: string) => {dispatch(updatePseudo(inputText)); setDialogPseudoVisible(false)} }
        closeDialog={ () => {setDialogPseudoVisible(false)}}>
      </DialogInput>

      <DialogInput 
        isDialogVisible={dialogPasswordVisible}
        title="Inserer le nouveau mot de passe"
        hintInput ="Mot de passe"
        submitInput={ (inputText: string) => {dispatch(updatePassword(inputText)); setDialogPasswordVisible(false)} }
        closeDialog={ () => {setDialogPasswordVisible(false)}}>
      </DialogInput>

    </View>
  );
}

export default Settings