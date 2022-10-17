import { FC, ReactNode } from "react"
import { View, TextInput,Text } from "react-native"
import React from "react"
import { trace } from "console"
import { Game } from "../core/game"

/*
    Importing the correct stylesheet
*/
import styles from "./style/TextInput.style"

export const CustomTextInput : 
/*
    * game : Game that must be displayed
    * nav : tool needed to allow the navigation between the screens
*/
FC<{placeholder:String,text:String}> = 
({placeholder, text}) => 
{
    const [value, onChangeText] = React.useState(placeholder);
    return (
        <View>
            <Text style={styles.section}>{text}</Text>
            <TextInput
                style={styles.input}
                onChangeText= {onChangeText}
            />
        </View> 
    )       
}