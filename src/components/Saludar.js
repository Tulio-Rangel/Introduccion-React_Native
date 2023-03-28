import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";

export default function Saludar(props) {
  const { name, lastname } = props;

  return (
    <Text>
      Hola que tal {name} {lastname}
    </Text>
  );
}

//Forma con defaultProps
Saludar.defaultProps = {
  firstname: "John",
  lastname: "Doe",
};

/**
 * Una forma mas simple de pasarle la propiedad
 * import { Text } from 'react-native'
 * const Saludar = ({ name = 'default name' }) => {
	return <Text> Hola {name}</Text>
    }
 * export default Saludar
 */

//PropTypes que es para poner si es req uerido o no un campo... Creo
Saludar.propTypes = {
  name: PropTypes.string.isRequired,
  lastname: PropTypes.string,
};
