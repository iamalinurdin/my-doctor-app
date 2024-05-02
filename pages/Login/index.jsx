import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Logo } from "../../assets/illustration";
import { Button, Gap, Input, Link } from "../../components";

export default function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <Logo />
      <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
      <Input label="Email Address" />
      <Gap height={24} />
      <Input label="Password" />
      <Gap height={10} />
      <Link title="Forgot Password?" align="start" />
      <Gap height={40} />
      <Button title="Sign In" />
      <Gap height={30} />
      <Link title="Create Account" size={16} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    color: '#112340',
    marginVertical: 40,
    maxWidth: 153,
    fontWeight: '600'
  }
})