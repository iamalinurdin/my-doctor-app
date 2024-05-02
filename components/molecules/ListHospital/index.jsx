import { Image, StyleSheet, Text, View } from "react-native";
import { DummyHospital1 } from "../../../assets/dummy";
import { colors } from "../../../utils/colors";

const ListHospital = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={DummyHospital1} />
      <View>
        <Text style={styles.category}>List Hospital</Text>
        <Text style={styles.name}>List Hospital</Text>
        <Text style={styles.address}>address</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomColor: colors.border,
    borderBottomWidth: 1
  },
  image: {
    width: 80,
    height: 60,
    borderRadius: 11,
    marginRight: 16
  },
  category: {
    fontSize: 16,
    fontWeight: 'normal',
    color: colors.text.primary
  },
  name: {
    fontSize: 16,
    fontWeight: 'normal',
    color: colors.text.primary
  },
  address: {
    fontSize: 12,
    fontWeight: '300',
    color: colors.text.secondary,
    marginTop: 6
  },
})

export default ListHospital;