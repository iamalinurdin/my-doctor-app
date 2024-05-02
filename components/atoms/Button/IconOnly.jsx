import { TouchableOpacity } from "react-native";
import { IconBackDark, IconBackLight } from "../../../assets/icon";

export default function IconOnly({ handleOnPress, icon }) {
  const Icon = () => {
    if (icon == 'back-dark') {
      return <IconBackLight />
    }

    return <IconBackDark />
  }


  return (
    <TouchableOpacity onPress={handleOnPress}>
      <Icon />
    </TouchableOpacity>
  )
}