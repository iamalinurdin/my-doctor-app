import { SafeAreaView, Text, View } from "react-native";
import { colors } from "../../utils/colors";
import { Gap, Header, MenuList, Profile } from "../../components";
import { IconUserAccount } from "../../assets/icon";
import { DummyDoctor8 } from "../../assets/dummy";

const HomeProfile = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <Header title="Profile" handleOnPress={() => navigation.goBack()} />
      <Gap height={10} />
      <Profile name="Jane Doe" description="Product Designer" image={DummyDoctor8} />
      <Gap height={14} />
      <MenuList
        icon="user-account"
        text="Edit Profile"
        description="Last updated yesterday"
        type="next"
        handleOnPress={() => navigation.navigate('UpdateProfile')}
      />
      <MenuList icon="translate" text="Language" description="Available 12 languages" type="next" />
      <MenuList icon="rate" text="Give Us Rate" description="On Google Play Store" type="next" />
      <MenuList icon="help-center" text="Help Center" description="Read our guidelines" type="next" />
    </SafeAreaView>
  );
}

export default HomeProfile;