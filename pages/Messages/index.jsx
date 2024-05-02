import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { ListDoctor } from "../../components";
import { colors } from "../../utils/colors";

export default function Messages() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.secondary }} >
      <View style={styles.container}>
        <Text style={styles.title}>Messages</Text>
        <ListDoctor />
        <ListDoctor />
        <ListDoctor />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text.primary,
    marginTop: 30,
    marginLeft: 16
  }
})