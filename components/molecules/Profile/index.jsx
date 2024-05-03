import { Image, StyleSheet, Text, View } from "react-native";
import { DummyDoctor1 } from "../../../assets/dummy";
import { colors } from "../../../utils/colors";

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.frame}>
        <Image source={DummyDoctor1} style={styles.avatar} />
      </View>
      <Text style={styles.name}>Jane Doe</Text>
      <Text style={styles.description}>Mobile Developer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2
  },
  frame: {
    borderWidth: 1,
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    borderColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center'
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text.primary,
    marginTop: 16
  },
  description: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text.secondary,
    marginTop: 2
  }
})

export default Profile;