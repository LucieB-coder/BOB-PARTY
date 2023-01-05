import { FC } from "react"
import { Pressable, Text } from "react-native"
import React from "react"
/*
  Importing the corresponding stylesheet
*/
import styles from "./style/BigBlueButton.style"

export const BigBlueButton:
  /* Parameters:
    * onPress : function that must be called when the button has been clicked
    * title : optional text that would be in the button
  */
  FC<{ onPress: any; title?: any | undefined; }>
  =
  ({ onPress, title }) => {
    return (
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    );
  }