import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { Gap, Header, ListDoctor } from "../../components";

const ChooseDoctor = () => {
  return (
    <SafeAreaView>
      {/* <View> */}
      <Header title="Pilih Dokter Anak" type="dark" />
      {/* <Text>Choose Doctor</Text> */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <ListDoctor type="next" />
        <ListDoctor type="next" />
        <ListDoctor type="next" />
        <ListDoctor type="next" />
        <ListDoctor type="next" />
        <ListDoctor type="next" />
        <ListDoctor type="next" />
        <ListDoctor type="next" />
        <ListDoctor type="next" />
        <ListDoctor type="next" />
        <ListDoctor type="next" />
        <ListDoctor type="next" />
        <ListDoctor type="next" />
        <ListDoctor type="next" />
        <Gap height={75} />
      </ScrollView>
      {/* </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

})

export default ChooseDoctor;