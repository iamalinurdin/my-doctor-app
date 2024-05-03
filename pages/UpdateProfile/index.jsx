import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { Button, Gap, Header, Input, Profile } from "../../components";
import { colors } from "../../utils/colors";

const UpdateProfile = ({ navigation }) => {
  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: colors.white
    }}>
      <Header title="Edit Profile" handleOnPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Profile />
          <Gap height={2} />
          <Input label="Nama Lengkap" />
          <Input label="Pekerjaan" />
          <Input label="Email" />
          <Input label="Password" />
          <Gap height={16} />
          <Button title="Simpan" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 40,
    paddingTop: 0,
    gap: 24
  }
})

export default UpdateProfile;