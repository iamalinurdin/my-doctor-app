import { ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import { IllustrationBGHospital } from "../../assets/illustration";
import { colors } from "../../utils/colors";
import { ListHospital } from "../../components";

export default function Hospitals() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.background} source={IllustrationBGHospital}>
        <Text style={styles.text}>Nearby Hospitals</Text>
        <Text style={styles.description}>3 tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ListHospital />
          <ListHospital />
          <ListHospital />
          <ListHospital />
          <ListHospital />
          <ListHospital />
          <ListHospital />
          <ListHospital />
          <ListHospital />
          <ListHospital />
          <ListHospital />
          <ListHospital />
          <ListHospital />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    flex: 1
  },
  background: {
    height: 240,
    paddingTop: 30
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.white,
    textAlign: 'center'
  },
  description: {
    fontSize: 14,
    fontWeight: '300',
    color: colors.white,
    marginTop: 6,
    textAlign: 'center'
  },
  content: {
    paddingTop: 14,
    backgroundColor: colors.white,
    borderRadius: 20,
    marginTop: -30,
    flex: 1,
    overflow: 'hidden'
  }
})