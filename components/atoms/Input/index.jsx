import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Input({ label }) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#e9e9e9',
    borderRadius: 10,
    padding: 12
  },
  label: {
    fontSize: 16,
    color: '#7d8797',
    marginBottom: 6,
  }
})