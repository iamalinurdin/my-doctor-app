import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IllustrationHeart } from "../../../assets/illustration";
import { colors } from "../../../utils/colors";

const DoctorCategory = ({ handleOnPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleOnPress}>
      <IllustrationHeart style={styles.illustration} />
      <Text style={styles.label}>Saya butuh</Text>
      <Text style={styles.category}>dokter umum</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: colors.cardLight,
    alignSelf: 'flex-start',
    borderRadius: 10,
    marginRight: 10,
    // width: 100,
    // height: 130,
  },
  illustration: {
    marginBottom: 28
  },
  label: {
    fontSize: 12,
    fontWeight: '300',
    color: colors.text.primary
  },
  category: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.text.primary
  },
})

export default DoctorCategory;