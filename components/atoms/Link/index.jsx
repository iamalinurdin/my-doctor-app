import { StyleSheet, Text, View } from "react-native";

export default function Link({ title, size = 12, align = 'center' }) {
  return (
    <View>
      <Text style={styles.text(size, align)}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: (size, align) => ({
    fontSize: size,
    color: '#7d8797',
    textDecorationLine: 'underline',
    textAlign: align
  })
})