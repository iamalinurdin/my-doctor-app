import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { ListDoctor, MenuList } from "../../components";
import { colors } from "../../utils/colors";
import { chats } from "../../assets/dummy";

export default function Messages({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.secondary }} >
      <View style={styles.container}>
        <Text style={styles.title}>Messages</Text>
        {chats.map((item, index) => (
          <MenuList
            handleOnPress={() => navigation.navigate('Chat')}
            image={item.image}
            text={item.name}
            description={item.message}
            key={index}
            boldDescription={!item.is_read}
          />
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text.primary,
    marginTop: 30,
    marginLeft: 16
  }
})