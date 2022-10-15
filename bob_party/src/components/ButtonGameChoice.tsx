import { FC} from "react"
import { Pressable, Text} from "react-native"
import React from "react"
import styles from "./style/ButtonGameChoice.style"

export const ButtonGameChoice:
FC<{ onPress: any; title?: any | undefined; }>
=
({onPress,title}) =>
     {
    return (
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    );
  }