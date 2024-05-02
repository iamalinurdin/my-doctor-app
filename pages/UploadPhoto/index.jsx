import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Button, Gap, Header, Link } from "../../components";
import { IllustrationPhotoNull } from "../../assets/illustration";
import { IconAddPhoto } from "../../assets/icon";
import { colors } from "../../utils/colors";

export default function UploadPhoto() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={styles.container}>
        <Header title="Upload Photo" />
        <View style={styles.content}>
          <View style={styles.profile}>
            <View style={styles.imageWrapper}>
              {/* <IllustrationPhotoNull /> */}
              <Image source={IllustrationPhotoNull} style={styles.photo} />
              <IconAddPhoto style={styles.addPhoto} />
            </View>
            <Text style={styles.name}>Shayna Melinda</Text>
            <Text style={styles.profession}>Product Designer</Text>
          </View>
          <View>
            <Button title="Upload and Continue" />
            <Gap height={30} />
            <Link title="Skip for this" size={16} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 40,
    paddingBottom: 64,
    flex: 1,
    justifyContent: 'space-between'
  },
  profile: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  photo: {
    width: 110,
    height: 100
  },
  imageWrapper: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  addPhoto: {
    position: 'absolute',
    bottom: 8,
    right: 6
  },
  name: {
    fontSize: 24,
    color: colors.text.primary,
    textAlign: 'center'
  },
  profession: {
    fontSize: 18,
    textAlign: 'center',
    color: colors.text.secondary,
    marginTop: 4
  }
})