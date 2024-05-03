import { StyleSheet, Text, TextInput, View } from "react-native";
import { colors } from "../../../utils/colors";
import { useState } from "react";

export default function Input({ label, value, handleOnChangeText, secureValue }) {
  const [border, setBorder] = useState(colors.border)
  const handleOnFocus = () => setBorder(colors.tertiary)
  const handleOnBlur = () => setBorder(colors.border)

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        style={styles.input(border)}
        value={value}
        onChangeText={handleOnChangeText}
        secureTextEntry={secureValue}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: (border) => ({
    borderWidth: 1,
    borderColor: border,
    borderRadius: 10,
    padding: 12
  }),
  label: {
    fontSize: 16,
    color: colors.text.secondary,
    marginBottom: 6,
  }
})