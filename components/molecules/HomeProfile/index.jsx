import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { DummyUser } from "../../../assets/dummy";
import { colors } from "../../../utils/colors";

export default function HomeProfile({ handleOnPress, name, description, image }) {
  return (
    <TouchableOpacity style={styles.container} onPress={handleOnPress}>
      <Image style={styles.avatar} source={image} />
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.profession}>{description}</Text>
      </View>
    </TouchableOpacity>
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