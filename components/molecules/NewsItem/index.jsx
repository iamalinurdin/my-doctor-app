import { Image, StyleSheet, Text, View } from "react-native";
import { DummyNews1 } from "../../../assets/dummy";
import { colors } from "../../../utils/colors";

const NewsItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.newsWrapper}>
        <Text style={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, nisi?</Text>
        <Text style={styles.date}>Today</Text>
      </View>
      <Image source={DummyNews1} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: 12,
    paddingTop: 16
  },
  newsWrapper: {
    flex: 1
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text.primary,
    maxWidth: '90%'
  },
  date: {
    marginTop: 4,
    fontSize: 12,
    color: colors.text.secondary
  },
  image: {
    width: 80,
    height: 60,
    borderRadius: 11
  }
})

export default NewsItem;