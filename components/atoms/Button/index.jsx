import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Button({ type = 'primary', title, handleOnPress }) {
  return (
    <TouchableOpacity style={styles.container(type)} onPress={handleOnPress}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: (type) => ({
    backgroundColor: type == 'primary' ? '#0BCAD4' : '#FFF',
    paddingVertical: 10,
    borderRadius: 10
  }),
  text: (type) => ({
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: type == 'primary' ? '#FFF' : '#000'
  })
})