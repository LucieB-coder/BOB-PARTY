import { StatusBar } from 'expo-status-bar'
import {KeyboardAvoidingView, Platform, TextInput, View} from 'react-native'
import React, { useCallback } from 'react';
import stylesScreen from './style/screens.style';
import { TopBar } from '../components/TopBar';
import { BotBar } from '../components/BotBar';
import { FlatList } from 'react-native-gesture-handler';
import { MANAGER_CONVERSATION, MANAGER_USER } from '../../appManagers';
import { MessageComponent } from '../components/MessageComponent';

function Conversation(props: { navigation: any; }) {
    const { navigation } = props
    
    const chosenConversation = MANAGER_CONVERSATION.getCurrentTabConv()[0].getTabMessage();

    

	const renderMessage = ({ item }) => {
		return (
			<MessageComponent mess={item}></MessageComponent>
		);
	};
	return(
		<KeyboardAvoidingView  behavior={Platform.OS == "ios" ? "padding" : "height"} style={stylesScreen.container}>
				<View style={stylesScreen.bodyStart}>
					<FlatList
						data={chosenConversation.reverse()}
						renderItem={renderMessage}
						keyExtractor={item => item.getMessageId().toString()}
						style={{flexDirection:'column-reverse'}}
					/>
					
					<TextInput 
						style={{height: '7%',
						width: '90%',
						borderRadius: '15%',
						backgroundColor: 'white',
						padding: 10,
						marginBottom: '7%',
						alignSelf: 'center',
						marginTop: '3%',
						}} 
						placeholder='Votre message...' 
						onChangeText={(val) => console.log("camarche")}
						returnKeyType="send"
						onSubmitEditing={() => console.log("oh oui")}
					/>
				</View>
		</KeyboardAvoidingView>
	);
}

export default Conversation