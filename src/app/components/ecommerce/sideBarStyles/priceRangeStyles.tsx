import styled from "styled-components";

// Eliminamos el uso de variables y hardcodeamos los colores directamente
export const PriceRangeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 10px;
  background-color: #000000; /* Fondo negro */
  border: 2px solid #ffd700; /* Borde amarillo */
  border-radius: 30px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  color: #333333; /* Texto oscuro */
  width: 100%; /* Asegura que ocupe todo el ancho */

  label {
    color: #4d4d4d; /* Gris oscuro */
  }

  input {
    border: 2px solid #808080; /* Gris claro */
    background-color: #1c1c1c; /* Fondo gris oscuro */
    color: #f8f9fa; /* Texto claro */

    &:focus {
      background-color: #333333; /* Cambia el fondo a gris oscuro al enfocar */
      border-color: #4d4d4d; /* Resalta con gris oscuro */
      box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
    }

    &:hover {
      border-color: #4d4d4d; /* Color al pasar el mouse */
    }
  }
`;


export const PriceRangeBar = styled.div`
  width: 100%;
  height: 6px;
  background: #ffd700; /* Amarillo */
  border-radius: 5px;
  position: relative;
  margin: 10px 0;

  @media (max-width: 768px) {
    width: 100% !important;
    height: 3px;
    margin: 20px 0;
  }
`;

export const PriceRangeInputs = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 10px; /* Espacio entre los inputs */
`;

export const thumbStyles = {
  height: "22px",
  width: "22px",
  borderRadius: "50%",
  backgroundColor: "#b0a700" /* Amarillo apagado al mover la barra */,
  border: `4px solid #808080` /* Gris claro */,
  boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)",
  zIndex: 2,
  cursor: "pointer",
  transition: "background-color 0.3s, transform 0.3s",

  "&:hover": {
    backgroundColor: "#b0a700" /* Amarillo apagado al pasar el mouse */,
    transform: "scale(1.15)",
  },
};

export const PriceRangeTrack = styled.div`
  height: 6px;
  background: #ffd700; /* Amarillo */
  border-radius: 5px;
`;
