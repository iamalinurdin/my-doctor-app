import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { colors } from "../../../utils";

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.primary} />
      <Text style={styles.text}>Loading</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.loadingBg,
    width: '100%',
    height: '100%'
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.primary
  }
})

export default Loading;