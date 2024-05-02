import { Image, StyleSheet, Text, View } from "react-native";
import { DummyDoctor1, DummyDoctor2 } from "../../../assets/dummy";
import { colors } from "../../../utils/colors";

export default function ListDoctor() {
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={DummyDoctor2} />
      <View>
        <Text style={styles.name}>Doctor Name</Text>
        <Text style={styles.text}>Lorem ipsum dolor sit amet velit...</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    alignItems: 'center'
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
    marginRight: 12
  },
  name: {
    fontSize: 16,
    color: colors.text.primary,
    fontWeight: 'normal'
  },
  text: {
    fontSize: 12,
    color: colors.text.secondary,
    fontWeight: '300'
  },
})