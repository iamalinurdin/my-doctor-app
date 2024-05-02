import { SafeAreaView, StyleSheet, View } from "react-native";
import { Button, Gap, Header, Input } from "../../components";
import { colors } from "../../utils/colors";

export default function Register({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Header handleOnPress={() => navigation.goBack()} title="Daftar Akun" />
      <View style={styles.content}>
        <Input label="Full Name" />
        <Gap height={24} />
        <Input label="Pekerjaan" />
        <Gap height={24} />
        <Input label="Email" />
        <Gap height={24} />
        <Input label="Password" />
        <Gap height={40} />
        <Button title="Continue" />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  content: {
    padding: 40,
    paddingTop: 0
  }
})