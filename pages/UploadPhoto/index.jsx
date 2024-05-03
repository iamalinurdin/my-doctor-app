import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button, Gap, Header, Link } from "../../components";
import { IllustrationPhotoNull } from "../../assets/illustration";
import { IconAddPhoto, IconRemovePhoto } from "../../assets/icon";
import { colors } from "../../utils/colors";
import { useState } from "react";
import { DummyDoctor1 } from "../../assets";
import { launchImageLibrary, launchCamera } from "react-native-image-picker";
import * as ImagePicker from 'expo-image-picker';

export default function UploadPhoto({ navigation }) {
  const [hasPhoto, setHasPhoto] = useState(false)
  const [photo, setPhoto] = useState(IllustrationPhotoNull)
  const getImage = async () => {
    // try {
    //   const result = await launchImageLibrary({
    //     mediaType: 'photo'
    //   });

    //   console.log(result)
    // } catch (error) {
    //   console.log('error', error)
    // }
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log('result', result);

    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
      setHasPhoto(true)
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={styles.container}>
        <Header title="Upload Photo" />
        <View style={styles.content}>
          <View style={styles.profile}>
            <TouchableOpacity style={styles.imageWrapper} onPress={getImage}>
              <Image source={{ uri: photo }} style={styles.photo} />
              {hasPhoto ? <IconRemovePhoto style={styles.icon} /> : <IconAddPhoto style={styles.icon} />}
            </TouchableOpacity>
            <Text style={styles.name}>Shayna Melinda</Text>
            <Text style={styles.profession}>Product Designer</Text>
          </View>
          <View>
            <Button title="Upload and Continue" disabled={!hasPhoto} />
            <Gap height={30} />
            <Link title="Skip for this" size={16} handleOnPress={() => navigation.replace('MainApp')} />
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
    height: 110,
    borderRadius: 110 / 2
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
  icon: {
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