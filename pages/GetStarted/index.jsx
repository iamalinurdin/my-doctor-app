import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { ILGetStarted, Logo } from "../../assets/illustration";
import { Button, Gap } from "../../components";

export default function GetStarted({ navigation }) {
  return (
    <ImageBackground source={ILGetStarted} style={styles.container}>
      <View>
        <Logo />
        <Text style={styles.text}>Konsultasi dengan dokter jadi lebih mudah & fleksibel</Text>
      </View>
      <View>
        <Button title="Get Started" handleOnPress={() => navigation.navigate('Register')} />
        <Gap height={16} />
        <Button title="Sign In" type="secondary" handleOnPress={() => navigation.navigate('Login')} />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    justifyContent: 'space-between',
    backgroundColor: 'yellow'
  },
  text: {
    fontSize: 28,
    fontWeight: '600',
    color: '#FFF',
    marginTop: 91,
    // fontFamily: 'Nunito-SemiBold'
  },
})