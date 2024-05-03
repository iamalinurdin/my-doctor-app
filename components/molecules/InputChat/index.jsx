import { StyleSheet, Text, TextInput, View } from "react-native";
import { colors } from "../../../utils/colors";
import { Button } from "../../atoms";

const InputChat = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="tulis pesan..." />
      <Button title="Send" type="button-icon-send" disabled={false} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row'
  },
  input: {
    backgroundColor: colors.disabled,
    padding: 14,
    borderRadius: 10,
    flex: 1,
    marginRight: 10
  }
})

export default InputChat;