import { StyleSheet, Text, View } from "react-native";
import { IconBackDark } from "../../../assets/icon";
import { Button, Gap } from "../../atoms";
import { colors } from "../../../utils/colors";

export default function Header({ handleOnPress, title }) {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="back-dark" handleOnPress={handleOnPress} />
      <Text style={styles.text}>{title}</Text>
      <Gap width={24} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: colors.text.primary
  }
})