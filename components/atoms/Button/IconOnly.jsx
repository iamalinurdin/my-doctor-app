import { TouchableOpacity } from "react-native";
import { IconBackDark } from "../../../assets/icon";

export default function IconOnly({ handleOnPress, icon }) {
  const Icon = () => {
    if (icon == 'back-dark') {
      return <IconBackDark />
    }

    return <IconBackDark />
  }


  return (
    <TouchableOpacity onPress={handleOnPress}>
      <Icon />
    </TouchableOpacity>
  )
}