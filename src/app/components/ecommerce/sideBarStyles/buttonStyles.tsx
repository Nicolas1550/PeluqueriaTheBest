import styled from "styled-components";
import { StyledFilterBar } from "./sideBarStyle";

// Colores del navbar aplicados a los estilos
export const FilterButtons = styled(StyledFilterBar)`
  display: flex;
  flex-direction: row; // Mantiene los elementos en fila
  flex-wrap: nowrap; // Evita el salto de línea automático
  gap: 15px;
  width: 100%;
  justify-content: flex-start; // Alinea los elementos al inicio del contenedor
  align-items: center; // Centra los elementos verticalmente

  button {
    display: flex;
    align-items: center;
    justify-content: center; // Centra el contenido del botón horizontalmente
    gap: 5px;
    padding: 10px 20px; // Aumenta el padding horizontal para dar más espacio
    border: 2px solid #ffd700;  // Dorado (navbar color)
    border-radius: 20px;
    font-size: 0.9em;
    font-weight: 600;
    cursor: pointer;
    background-color: rgba(28, 28, 28, 0.8); // Fondo oscuro semi-transparente (navbar background)
    color: #f8f9fa; // Texto claro
    transition: background-color 0.3s, transform 0.3s;
    text-align: center; // Asegura que el texto esté centrado

    &.active {
      background-color: #ffd700;  // Dorado activo
      color: #1c1c1c;  // Texto oscuro cuando activo
    }

    &:hover {
      background-color: #ffd700;  // Dorado al pasar el cursor
      transform: scale(1.05);
      color: #1c1c1c;  // Texto oscuro en hover
    }
  }

  @media (max-width: 768px) {
    justify-content: center; // Centra los botones horizontalmente en pantallas pequeñas
    align-items: center; // Centra los botones verticalmente en pantallas pequeñas
    flex-direction: column; // Los botones se apilan verticalmente en pantallas pequeñas

    button {
      width: 100%; // Ocupa todo el ancho disponible
      margin: 5px 0; // Añade un margen vertical
      text-align: center;
      padding: 8px 10px;
    }
  }
`;

export const FilterOption = styled.button`
  background: none;
  border: 2px solid #ffd700; // Dorado (navbar color)
  padding: 8px 14px;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s, color 0.3s;
  color: #ffd700;  // Texto dorado
  font-weight: 600;

  &:hover {
    background-color: #ffd700;  // Fondo dorado en hover
    color: #1c1c1c;  // Texto oscuro en hover
  }

  &.active {
    background-color: #ffd700;  // Fondo dorado cuando activo
    color: #1c1c1c;  // Texto oscuro cuando activo
  }
  
  @media (max-width: 768px) {
    margin-right: 0; // Asegúrate de que no haya margen a la derecha en dispositivos móviles
    margin-bottom: 12px; // Asegúrate de que haya consistencia en el margen inferior
    width: 100%; // Ocupa todo el ancho disponible
  }
`;
