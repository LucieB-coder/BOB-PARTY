import { FC} from "react"
import { Pressable, Text} from "react-native"
import React from "react"
import styles from "./style/ButtonChangeSkin.style"

export const ButtonChangeSkin:
FC<{ onPress: any;}>
=
({onPress}) =>
     {
    return (
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>Changer de skin</Text>
      </Pressable>
    );
  }