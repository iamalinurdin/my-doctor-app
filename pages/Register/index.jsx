import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Button, Gap, Header, Input } from "../../components";
import { colors } from "../../utils/colors";
import { useState } from "react";
import { useForm } from "../../utils";

export default function Register({ navigation }) {
  const [form, setForm] = useForm({
    fullname: '',
    profession: '',
    email: '',
    password: '',
  })
  const handleContinue = () => console.log(form)

  return (
    <SafeAreaView style={styles.container}>
      <Header handleOnPress={() => navigation.goBack()} title="Daftar Akun" />
      <View style={styles.content}>
        <Input
          label="Full Name"
          handleOnChangeText={(value) => setForm('fullname', value)}
          value={form.fullname}
        />
        <Gap height={24} />
        <Input
          label="Pekerjaan"
          handleOnChangeText={(value) => setForm('profession', value)}
          value={form.profession}
        />
        <Gap height={24} />
        <Input
          label="Email"
          handleOnChangeText={(value) => setForm('email', value)}
          value={form.email}
        />
        <Gap height={24} />
        <Input
          label="Password"
          handleOnChangeText={(value) => setForm('password', value)}
          value={form.password}
          secureValuea
        />
        <Gap height={40} />
        <Button title="Continue" handleOnPress={handleContinue} />
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