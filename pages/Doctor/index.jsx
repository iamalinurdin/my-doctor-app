import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { DoctorCategory, Gap, HomeProfile, NewsItem, RatedDoctor } from "../../components";
import { colors } from "../../utils/colors";

export default function Doctor({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.secondary }}>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapperContent}>
            <Gap height={30} />
            <HomeProfile handleOnPress={() => navigation.navigate('HomeProfile')} />
            <Text style={styles.sectionLabel}>Mau konsultasi dengan siapa hari ini?</Text>
          </View>
          <View style={{ marginHorizontal: -16 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.category}>
                <Gap width={32} />
                <DoctorCategory handleOnPress={() => navigation.navigate('ChooseDoctor')} />
                <DoctorCategory />
                <DoctorCategory />
                <DoctorCategory />
                <Gap width={22} />
              </View>
            </ScrollView>
          </View>
          <View style={styles.wrapperContent}>
            <Text style={styles.sectionLabel}>Top Rated Doctor</Text>
            <RatedDoctor />
            <RatedDoctor />
            <RatedDoctor />
          </View>
          <View style={styles.wrapperContent}>
            <Text style={styles.sectionLabel}>Good News</Text>
            <NewsItem />
            <NewsItem />
            <NewsItem />
          </View>
          <Gap height={30} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // paddingVertical: 30,
    // paddingHorizontal: 16,
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  sectionLabel: {
    marginTop: 30,
    marginBottom: 16,
    fontSize: 20,
    color: colors.text.primary,
    fontWeight: '600',
    maxWidth: 209
  },
  category: {
    flexDirection: 'row',
  },
  wrapperContent: {
    paddingHorizontal: 16
  }
})