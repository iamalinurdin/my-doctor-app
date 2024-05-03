import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { Gap, Header, MenuList } from "../../components";
import { doctors } from "../../assets/dummy";

const ChooseDoctor = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Header title="Pilih Dokter Anak" type="dark" handleOnPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {doctors.map((item, index) => (
          <MenuList
            image={item.image}
            text={item.name}
            description={item.sex}
            type="next"
            handleOnPress={() => navigation.navigate('Chat')}
            key={index}
          />
        ))}
        <Gap height={75} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

})

export default ChooseDoctor;