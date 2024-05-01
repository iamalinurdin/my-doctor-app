import { StyleSheet, Text, View } from "react-native";

export default function Button({ type = 'primary', title }) {
  return (
    <View style={styles.container(type)}>
      <Text style={styles.text(type)}>{title}</Text>
    </View>
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