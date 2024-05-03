import { Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../../../utils/colors";
import { Button } from "../../atoms";
import { DummyDoctor1 } from "../../../assets/dummy";

const DarkProfile = () => {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="back-dark" />
      <View style={styles.profile}>
        <Text style={styles.name}>Doctor Name</Text>
        <Text style={styles.category}>Category</Text>
      </View>
      <Image style={styles.avatar} source={DummyDoctor1} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    paddingVertical: 30,
    paddingLeft: 20,
    paddingRight: 16,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  profile: {
    flex: 1
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.white,
    textAlign: 'center'
  },
  category: {
    fontSize: 14,
    fontWeight: 'normal',
    color: colors.text.subtitle,
    marginTop: 6,
    textAlign: 'center'
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2
  }
})

export default DarkProfile;