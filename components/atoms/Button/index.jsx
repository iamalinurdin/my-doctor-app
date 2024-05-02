import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors } from "../../../utils/colors";
import IconOnly from "./IconOnly";

export default function Button({ type = 'primary', title, handleOnPress, icon }) {
  if (type == 'icon-only') {
    return <IconOnly icon={icon} handleOnPress={handleOnPress} />
  }

  return (
    <TouchableOpacity style={styles.container(type)} onPress={handleOnPress}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: (type) => ({
    backgroundColor: type == 'primary' ? colors.button.primary.background : colors.button.secondary.background,
    paddingVertical: 10,
    borderRadius: 10
  }),
  text: (type) => ({
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: type == 'primary' ? colors.button.primary.text : colors.button.secondary.text
  })
})