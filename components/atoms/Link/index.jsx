import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../../utils/colors";

export default function Link({ title, size = 12, align = 'center', handleOnPress }) {
  return (
    <TouchableOpacity onPress={handleOnPress}>
      <Text style={styles.text(size, align)}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  text: (size, align) => ({
    fontSize: size,
    color: colors.text.secondary,
    textDecorationLine: 'underline',
    textAlign: align
  })
})