import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { colors } from "../../utils/colors";
import { Button, Gap, Header, Profile, ProfileItem } from "../../components";
import { DummyDoctor1 } from "../../assets/dummy";

const DoctorProfile = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <Header title="Doctor Profile" handleOnPress={() => navigation.goBack()} />
      <Profile name="Jane Doe" description="Dentist" image={DummyDoctor1} />
      <Gap height={10} />
      <ProfileItem title="Alumnus" description="Universitas Indonesia, 2020" />
      <ProfileItem title="Tempat Praktik" description="Rumah Sakit Umum, Bandung" />
      <ProfileItem title="No. STR" description="0000116622081996" />
      <View style={styles.buttonWrapper}>
        <Button title="Mulai Konsultasi" handleOnPress={() => navigation.navigate('Chat')} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonWrapper: {
    paddingHorizontal: 40,
    paddingTop: 23
  }
})

export default DoctorProfile;