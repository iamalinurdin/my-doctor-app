import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { IconDoctorActive, IconDoctorDeactive, IconHospitalActive, IconHospitalDeactive, IconMessageActive, IconMessageDeactive } from "../../../assets/icon";
import { colors } from "../../../utils/colors";

export default function TabItem({ title, active, handleOnPress, handleOnLongPress }) {
  const Icon = () => {
    switch (title) {
      case 'Doctor':
        return active ? <IconDoctorActive /> : <IconDoctorDeactive />
      case 'Messages':
        return active ? <IconMessageActive /> : <IconMessageDeactive />
      case 'Hospitals':
        return active ? <IconHospitalActive /> : <IconHospitalDeactive />
      default:
        return active ? <IconDoctorActive /> : <IconDoctorDeactive />
    }
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handleOnPress} onLongPress={handleOnLongPress}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  text: (active) => ({
    color: active ? colors.text.active : colors.text.inactive,
    fontSize: 10,
    fontWeight: '600',
    marginTop: 4
  })
})