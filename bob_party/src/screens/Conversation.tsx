import { StatusBar } from 'expo-status-bar'
import {KeyboardAvoidingView, NativeSyntheticEvent, Platform, TextInput, TextInputSubmitEditingEventData, View} from 'react-native'
import React, { useCallback } from 'react';
import stylesScreen from './style/screens.style';
import { TopBar } from '../components/TopBar';
import { BotBar } from '../components/BotBar';
import { FlatList } from 'react-native-gesture-handler';
import { MANAGER_CONVERSATION, MANAGER_USER } from '../../appManagers';
import { MessageComponent } from '../components/MessageComponent';
import { useConversationStore } from '../context/conversationContext';
import { Message } from '../core/message';
import { Conversation } from '../core/conversation';
import { socket } from '../../socketConfig';

function ConversationScreen(props: { navigation: any; }) {
    const { navigation } = props
	const [text, onChangeText] = React.useState("");	

	const setTabConv = useConversationStore((state) => state.setTabConv);

	async function sendMessage(e:NativeSyntheticEvent<TextInputSubmitEditingEventData>){
		if (e.nativeEvent.text!=="" || e.nativeEvent.text.match(/^ *$/) === null){
			const tmpUs=MANAGER_USER.getCurrentUser();
			const tmpConv=MANAGER_CONVERSATION.getCurrentConv();
			if (tmpUs!==null && tmpConv!==null){
				await MANAGER_CONVERSATION.getsaverConversation().addMessage(tmpConv.getId(), e.nativeEvent.text, new Date(), tmpUs).then((res) => {
					if (res!==null){
						const trouveIndex = (element: Conversation) => element.getId()===tmpConv.getId();
						MANAGER_CONVERSATION.getCurrentConv()?.getTabMessage().push(res);
						const index=MANAGER_CONVERSATION.getTabConv().findIndex(trouveIndex);
						const tmp=MANAGER_CONVERSATION.getCurrentConv();
						if (tmp!==null){
							MANAGER_CONVERSATION.getTabConv()[index]=tmp;
							setTabConv(MANAGER_CONVERSATION.getTabConv());
							socket.emit("messageSent", tmp);
							onChangeText("");
						}
					}
				});
			}
		}

	}

	
        

	const renderMessage = ({ item }) => {
		return (
			<MessageComponent mess={item}></MessageComponent>
		);
	};
	return(
		<KeyboardAvoidingView  behavior={Platform.OS == "ios" ? "padding" : "height"} style={stylesScreen.container}>
				<View style={stylesScreen.bodyStart}>
					<FlatList
						data={useConversationStore().currentConv?.getTabMessage().reverse()}
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
						returnKeyType="send"
						onChangeText={onChangeText}
						value={text}
						onSubmitEditing={(val) => {sendMessage(val)}}
						blurOnSubmit
					/>
				</View>
		</KeyboardAvoidingView>
	);
}

export default ConversationScreen