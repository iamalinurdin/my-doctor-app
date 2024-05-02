import { StyleSheet, Text, View } from "react-native";
import { IconBackDark } from "../../../assets/icon";
import { Gap } from "../../atoms";
import { colors } from "../../../utils/colors";

export default function Header() {
  return (
    <View style={styles.container}>
      <IconBackDark />
      <Text style={styles.text}>Text Header</Text>
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