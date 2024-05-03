import { useState } from "react"

export const useForm = (initialValue) => {
  const [value, setValue] = useState(initialValue)

  return [value, (type, params) => {
    if (type == 'reset') {
      return setValue(initialValue)
    }

    setValue({ ...value, [type]: params })
  }]
}