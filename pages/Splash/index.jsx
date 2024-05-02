import { StyleSheet, Text, View } from "react-native";
import { Logo } from "../../assets/illustration";
import { useEffect } from "react";
import { colors } from "../../utils/colors";

export default function Splash({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStarted')
    }, 3000)
  }, [navigation])

  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.greetingText}>
        My Doctor
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  greetingText: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text.primary,
    marginTop: 20
  }
});