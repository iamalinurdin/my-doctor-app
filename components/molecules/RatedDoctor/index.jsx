import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { DummyDoctor1 } from "../../../assets/dummy";
import { IconStar } from "../../../assets/icon";
import { colors } from "../../../utils/colors";

const RatedDoctor = ({ handleOnPress, name, position, image }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleOnPress}>
      <Image style={styles.avatar} source={image} />
      <View style={styles.profile}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.category}>{position}</Text>
      </View>
      <View style={styles.rating}>
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 16
  },
  profile: {
    flex: 1
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginRight: 12
  },
  name: {
    fontSize: 16,
    color: colors.text.primary,
    fontWeight: '600'
  },
  category: {
    fontSize: 12,
    marginTop: 2,
    color: colors.text.secondary
  },
  rating: {
    flexDirection: 'row',
  }
})

export default RatedDoctor;