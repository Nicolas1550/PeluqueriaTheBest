import styled from "styled-components";

export const FilterInput = styled.input`
  width: 100%;
  padding: 12px 40px 12px 15px; /* Aumentar el padding izquierdo para el ícono */
  border: 2px solid #ffd700; /* Amarillo dorado */
  border-radius: 25px; /* Hacerlo más redondeado */
  font-size: 1em; /* Aumentar el tamaño de fuente */
  outline: none;
  color: #333333; /* Texto oscuro */
  background-color: white; /* Fondo blanco para destacar */
  transition: border-color 0.3s, box-shadow 0.3s;

  &:focus {
    border-color: #ffd700; /* Amarillo dorado */
    box-shadow: 0px 4px 12px rgba(255, 215, 0, 0.5); /* Sombra amarilla */
  }

  &:hover {
    border-color: #ffd700; /* Amarillo dorado */
  }

  &::placeholder {
    color: #707070; /* Gris oscuro */
    font-style: italic;
  }
`;

export const PriceRangeInput = styled.input`
  width: 45%;
  padding: 8px 14px; /* Aumentar el padding para un mejor aspecto */
  border: 2px solid #ffd700; /* Dorado */
  border-radius: 20px;
  font-size: 0.95em;
  outline: none;
  appearance: none;
  color: #ffd700; /* Dorado */
  background-color: #ff59b4; /* Rosado oscuro */
  transition: border-color 0.3s, box-shadow 0.3s, background-color 0.3s;
  text-align: center;

  /* Estilos para navegadores */
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::-moz-inner-spin-button,
  &::-moz-outer-spin-button {
    -moz-appearance: none;
    margin: 0;
  }

  &::-ms-clear {
    display: none;
  }

  &:focus {
    background-color: #fffaf0; /* Fondo claro */
    border-color: #ffd700; /* Dorado */
    box-shadow: 0px 4px 12px rgba(255, 215, 0, 0.2);
  }
`;

export const PriceRangeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 10px;
  background-color: #faf3e0; /* Fondo claro */
  border: 2px solid #a0a0a0; /* Gris oscuro */
  border-radius: 30px;
  box-shadow: 0px 4px 12px rgba(255, 105, 180, 0.2);
  color: #333333; /* Texto oscuro */
  width: 100%; /* Asegúrate de que ocupe todo el ancho */

  label {
    color: #ff59b4; /* Rosado oscuro */
  }

  input {
    border: 2px solid #ffc1dc; /* Rosado claro */
    background-color: white; /* Fondo blanco */
    color: #333333; /* Texto oscuro */

    &:focus {
      border-color: #ff59b4; /* Rosado oscuro */
      box-shadow: 0px 4px 12px rgba(255, 105, 180, 0.2);
    }

    &:hover {
      border-color: #ff59b4; /* Rosado oscuro */
    }
  }
`;

export const PriceRangeBar = styled.div`
  width: 100%;
  height: 6px;
  background: #ffd700; /* Dorado */
  border-radius: 5px;
  position: relative;
  margin: 10px 0;

  @media (max-width: 768px) {
    width: 100% !important;
    height: 3px;
    margin: 20px 0;
  }
`;

export const PriceRangeTrack = styled.div`
  height: 6px;
  background: #ffd700; /* Dorado */
  border-radius: 5px;
`;

export const thumbStyles = {
  height: "22px",
  width: "22px",
  borderRadius: "50%",
  backgroundColor: "#ff59b4", /* Rosado oscuro */
  border: "4px solid #ffc1dc", /* Rosado claro */
  boxShadow: "0px 2px 6px rgba(255, 105, 180, 0.2)",
  zIndex: 2,
  cursor: "pointer",
  transition: "background-color 0.3s, transform 0.3s",

  "&:hover": {
    backgroundColor: "#ff59b4", /* Rosado oscuro al pasar el mouse */
    transform: "scale(1.15)",
  },
};
