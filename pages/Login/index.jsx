import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Logo } from "../../assets/illustration";
import { Button, Gap, Input, Link } from "../../components";
import { colors } from "../../utils/colors";

export default function Login({ navigation }) {
  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: 'white',
    }}>
      <View style={styles.container}>
        <Logo />
        <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
        <Input label="Email Address" />
        <Gap height={24} />
        <Input label="Password" />
        <Gap height={10} />
        <Link title="Forgot Password?" align="start" />
        <Gap height={40} />
        <Button title="Sign In" handleOnPress={() => navigation.replace('MainApp')} />
        <Gap height={30} />
        <Link title="Create Account" size={16} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
  },
  title: {
    fontSize: 20,
    color: colors.text.primary,
    marginVertical: 40,
    maxWidth: 153,
    fontWeight: '600'
  }
})