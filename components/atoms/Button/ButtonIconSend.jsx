import { StyleSheet, Text, View } from "react-native";
import { IconSend, IconSendDisabled } from "../../../assets/icon";
import { colors } from "../../../utils/colors";

const ButtonIcon = ({ disabled }) => {
  return (
    <View style={styles.container(disabled)}>
      {disabled ? (<IconSendDisabled />) : (<IconSend />)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: (disabled) => ({
    backgroundColor: disabled ? colors.disabled : colors.tertiary,
    width: 45,
    height: 45,
    borderRadius: 10,
    paddingTop: 3,
    paddingLeft: 8,
    paddingRight: 3,
    paddingBottom: 8
  })
})

export default ButtonIcon;