import { Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../../../utils/colors";
import { DummyDoctor1 } from "../../../assets/dummy";

const ChatItem = ({ isMe }) => {
  return (
    <View style={styles.container(isMe)}>
      {!isMe ? (<Image style={styles.avatar} source={DummyDoctor1} />) : null}
      <View style={styles.content(isMe)}>
        <View style={styles.chat(isMe)}>
          <Text style={styles.message(isMe)}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, fuga?</Text>
        </View>
        <Text style={styles.date}>Date</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: (isMe) => ({
    flex: 1,
    alignItems: isMe ? 'flex-end' : 'flex-start'
  }),
  container: (isMe) => ({
    marginBottom: 20,
    paddingRight: isMe ? 16 : 0,
    paddingLeft: isMe ? 0 : 16,
    flexDirection: 'row',
    alignItems: 'flex-end'
  }),
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    marginRight: 12,
  },
  chat: (isMe) => ({
    padding: 12,
    paddingRight: 18,
    backgroundColor: isMe ? colors.cardLight : colors.primary,
    maxWidth: '80%',
    // width: '100%',
    borderRadius: 10,
    borderBottomLeftRadius: isMe ? 10 : 0,
    borderBottomRightRadius: isMe ? 0 : 10,
  }),
  date: {
    fontSize: 11,
    fontWeight: 'normal',
    color: colors.text.secondary,
    marginTop: 8
  },
  message: (isMe) => ({
    fontSize: 14,
    fontWeight: 'normal',
    color: isMe ? colors.text.primary : colors.white
  })
})

export default ChatItem;