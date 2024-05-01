import { StyleSheet, Text, View } from "react-native";
import { Logo } from "../../assets/illustration";
import { useEffect } from "react";

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
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  greetingText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#112340',
    marginTop: 20
  }
});