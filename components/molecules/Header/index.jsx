import { StyleSheet, Text, View } from "react-native";
import { IconBackDark } from "../../../assets/icon";
import { Button, Gap } from "../../atoms";
import { colors } from "../../../utils/colors";
import DarkProfile from "./DarkProfile";

export default function Header({ handleOnPress, title, type }) {
  if (type == 'dark-profile') {
    return <DarkProfile />
  }

  return (
    <View style={styles.container(type)}>
      <Button type="icon-only" icon="back-dark" handleOnPress={handleOnPress} />
      <Text style={styles.text(type)}>{title}</Text>
      <Gap width={24} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: (type) => ({
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: type == 'dark' ? colors.secondary : colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomLeftRadius: type == 'dark' ? 20 : 0,
    borderBottomRightRadius: type == 'dark' ? 20 : 0,
  }),
  text: (type) => ({
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: type == 'dark' ? colors.white : colors.text.primary
  })
})