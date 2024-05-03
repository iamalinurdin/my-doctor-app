import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { ChatItem, Gap, Header, InputChat } from "../../components";
import { colors } from "../../utils/colors";

const Chat = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <Header title="John Doe" type="dark-profile" handleOnPress={() => navigation.goBack()} />
      <ScrollView style={styles.chats}>
        <Gap height={20} />
        <ChatItem isMe={true} />
        <ChatItem isMe={true} />
        <ChatItem isMe={false} />
        <ChatItem isMe={false} />
        <ChatItem isMe={true} />
      </ScrollView>
      <InputChat />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  chats: {
    flex: 1,
    backgroundColor: colors.white,
  }
})

export default Chat;