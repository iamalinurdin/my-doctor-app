import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { DummyDoctor1, DummyDoctor2 } from "../../../assets/dummy";
import { colors } from "../../../utils/colors";
import { IconChevronRight, IconDescription, IconStarOutline, IconTranslate, IconUserAccount } from "../../../assets/icon";

export default function MenuList({
  text = '',
  description = '',
  image = '',
  type,
  handleOnPress,
  icon,
  boldDescription
}) {
  const Icon = () => {
    switch (icon) {
      case 'user-account':
        return <IconUserAccount />
      case 'translate':
        return <IconTranslate />
      case 'rate':
        return <IconStarOutline />
      case 'help-center':
        return <IconDescription />
      default:
        return <IconUserAccount />
    }
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handleOnPress}>
      {icon ? <Icon /> : <Image style={styles.avatar} source={image} />}
      <View style={styles.profileWrapper}>
        <Text style={styles.name}>{text}</Text>
        <Text style={styles.text(boldDescription)}>{description}</Text>
      </View>
      {type == 'next' && (
        <IconChevronRight />
      )}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
  name: {
    fontSize: 16,
    color: colors.text.primary,
    fontWeight: 'normal'
  },
  text: (boldDescription) => ({
    fontSize: 12,
    color: boldDescription ? colors.text.primary : colors.text.secondary,
    fontWeight: boldDescription ? '600' : '300'
  }),
  profileWrapper: {
    flex: 1,
    marginLeft: 12
  }
})