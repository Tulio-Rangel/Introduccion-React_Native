import React from "react";
import { Text } from "react-native";

export default function Saludar(props) {
  const { name } = props;

  return <Text>Hola que tal {name} </Text>;
}

//Forma con defaultProps
// Saludar.defaultProps = {
//   firstname: "Agustin",
//   lastname: "Navarro Galdon",
// };

/**
 * Una forma mas simple de pasarle la propiedad
 * import { Text } from 'react-native'
 * const Saludar = ({ name = 'default name' }) => {
	return <Text> Hola {name}</Text>
    }
 * export default Saludar
 */
