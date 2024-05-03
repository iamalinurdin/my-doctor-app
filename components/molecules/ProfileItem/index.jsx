import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../../utils/colors";

const ProfileItem = ({ title, description }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border
  },
  title: {
    color: colors.text.secondary,
    fontWeight: 'normal',
    fontSize: 14
  },
  description: {
    color: colors.text.primary,
    fontWeight: 'normal',
    fontSize: 14
  },
})

export default ProfileItem;