import { Image, StyleSheet, Text, View } from "react-native";
import { DummyUser } from "../../../assets/dummy";
import { colors } from "../../../utils/colors";

export default function HomeProfile() {
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={DummyUser} />
      <View>
        <Text style={styles.name}>Shayna Melinda</Text>
        <Text style={styles.profession}>Product Designer</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
    marginRight: 12
  },
  name: {
    fontWeight: '600',
    fontSize: 16,
    color: colors.text.primary
  },
  profession: {
    fontWeight: '400',
    fontSize: 12,
    color: colors.text.secondary
  }
})