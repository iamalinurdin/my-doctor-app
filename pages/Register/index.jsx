import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Button, Gap, Header, Input, Loading } from "../../components";
import { colors } from "../../utils/colors";
import { useState } from "react";
import { useForm } from "../../utils";
import { firebase } from "../../config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { showMessage } from "react-native-flash-message";
import { addDoc, collection, getFirestore } from "firebase/firestore";

export default function Register({ navigation }) {
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useForm({
    fullname: '',
    profession: '',
    email: '',
    password: '',
  })
  const handleContinue = async () => {

    try {
      setLoading(true)

      const auth = getAuth(firebase)
      const database = getFirestore()

      await createUserWithEmailAndPassword(auth, form.email, form.password)
      await addDoc(collection(database, 'users'), {
        fullname: form.fullname,
        profession: form.profession,
        email: form.email,
      })

      setForm('reset')
    } catch (error) {
      const errorMessage = error.message;

      showMessage({
        message: errorMessage,
        backgroundColor: colors.error,
        color: colors.white,
      })

      console.log(errorMessage)
    } finally {
      setLoading(false)
    }
    // .then((userCredential) => {
    //   // Signed up 
    //   const user = userCredential.user;

    //   console.log(user)

    //   setForm('reset')
    //   // ...
    // })
    // .catch((error) => {
    //   const errorCode = error.code;
    //   const errorMessage = error.message;

    //   console.log(errorCode, errorMessage)

    //   showMessage({
    //     message: errorMessage,
    //     backgroundColor: colors.error,
    //     color: colors.white,
    //   })
    // })
    // .finally(() => setLoading(false))
  }

  return (
    <>
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
            secureValue
          />
          <Gap height={40} />
          <Button title="Continue" handleOnPress={handleContinue} />
        </View>
      </SafeAreaView>
      {loading && <Loading />}
    </>
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