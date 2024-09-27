import Slider from "@mui/material/Slider";
import styled from "styled-components";
import React, { forwardRef } from "react";
import { motion } from "framer-motion";

// Reemplazo de colores para que coincidan con el esquema del navbar
export const colors = {
  neutralLight: "#FAF3E0",
  borderGray: "#A0A0A0",
  goldLight: "#FFD700", // Dorado claro
  pinkLight: "#F4C2C2", // Rosado suave
  pinkDark: "#FF59B4",
  blackDark: "#1C1C1C",
  background: "#2B2B2B", // Fondo oscuro
  cardShadow: "rgba(0, 0, 0, 0.1)",
  text: "#EAEAEA", // Texto claro
  darkerGray: "#707070",
};

// Botones del filtro con colores y estilos adaptados
export const FilterButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;

  button {
    flex: 0;
    margin: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;

    button {
      width: 100%;
      margin-bottom: 10px;
    }
  }
`;

export const SidebarTitle = styled.h2`
  font-size: 1em;
  color: ${colors.goldLight}; // Título en dorado
  margin-bottom: 15px;
  text-align: center;
  font-weight: 600;
`;

export const StyledFilterBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
  align-items: center;
  width: 100%;
  border-radius: 15px;
  box-shadow: 0px 5px 15px ${colors.cardShadow};
  transition: box-shadow 0.3s ease;
  background-color: rgba(43, 43, 43, 0.7); // Fondo semi-transparente oscuro

  &:hover {
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  }
`;

export const FilterSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  .price-section,
  .color-section,
  .brand-section {
    border-radius: 25px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 105px;

    label {
      margin-bottom: 10px;
      color: ${colors.goldLight}; // Texto dorado
      font-weight: 600;
      text-align: center;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;

    .price-section,
    .color-section,
    .brand-section {
      margin: 10px 0;
      align-items: center;
    }
  }
`;

export const FilterSectionItem = styled.div`
  overflow: auto;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 10px;

  label {
    margin-bottom: 0px;
    color: #ffd700; /* Texto dorado */
    font-weight: 600;
    text-align: center;
  }

  /* Personalización de la barra de scroll */
  ::-webkit-scrollbar {
    width: 10px; /* Ancho de la barra de desplazamiento */
  }

  ::-webkit-scrollbar-track {
    background: #2b2b2b; /* Fondo del track oscuro */
    border-radius: 10px; /* Bordes redondeados para la pista */
  }

  ::-webkit-scrollbar-thumb {
    background-color: #ffd700; /* Color amarillo dorado para el thumb */
    border-radius: 10px; /* Bordes redondeados para el thumb */
    border: 2px solid #1c1c1c; /* Borde alrededor del thumb */
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #e5c200; /* Color amarillo más fuerte al pasar el mouse */
  }

  .react-select__control {
    margin-top: 0;
  }

  .react-select-container {
    margin-top: -50px;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 10px 0;

    .Select__control,
    .Select__menu {
      width: 100%;
    }

    .Select__single-value {
      text-align: center;
    }
  }
`;


export const FilterSelect = styled.select`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid ${colors.pinkLight}; // Borde rosado suave
  border-radius: 25px;
  font-size: 1em;
  outline: none;
  color: ${colors.text};
  background-color: white;
  transition: border-color 0.3s, box-shadow 0.3s, background-color 0.3s;
  text-align-last: center;
  cursor: pointer;

  option {
    text-align: center;
    padding: 8px 12px;
    background-color: white;
    cursor: pointer;

    &:hover {
      background-color: ${colors.goldLight}; // Fondo dorado al pasar el mouse
      color: ${colors.blackDark}; // Texto oscuro
    }
  }

  &:focus {
    border-color: ${colors.goldLight}; // Borde dorado al enfocar
    box-shadow: 0px 4px 12px rgba(255, 215, 0, 0.2); // Sombra dorada
    background-color: ${colors.neutralLight}; // Fondo claro al enfocar
  }

  &:hover {
    border-color: ${colors.goldLight};
  }
`;

interface StickyFilterContainerProps {
  isSticky: boolean;
  isExpanded: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  children?: React.ReactNode;
  className?: string;
}

const StickyFilterContainerBase = forwardRef<
  HTMLDivElement,
  StickyFilterContainerProps
>(
  (
    { isExpanded, onMouseEnter, onMouseLeave, children, className, ...rest },
    ref
  ) => {
    return (
      <motion.div
        ref={ref}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={className}
        {...rest}
        initial={{ y: -100, opacity: 0, scale: 0.95 }}
        animate={{
          y: isExpanded ? 0 : 20,
          opacity: isExpanded ? 1 : 0.7,
          scale: isExpanded ? 1 : 0.95,
        }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    );
  }
);

StickyFilterContainerBase.displayName = "StickyFilterContainerBase";

// Refactorización usando los colores dorado y negro del navbar
export const StickyFilterContainer = styled(StickyFilterContainerBase)`
  position: ${({ isSticky }) => (isSticky ? "fixed" : "static")};
  top: ${({ isSticky, isExpanded }) =>
    isSticky ? (isExpanded ? "70px" : "-30%") : "0"};
  z-index: 4;
  background-color: rgba(43, 43, 43, 0.7); /* Fondo oscuro semi-transparente */
  padding: 25px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  margin-top: ${({ isSticky }) => (isSticky ? "0" : "30px")};
  margin-bottom: ${({ isSticky }) => (isSticky ? "0" : "29px")};
  display: flex;
  flex-direction: column;
  width: auto;
  max-height: ${({ isExpanded }) =>
    isExpanded ? "calc(100vh - 60px)" : "25%"};
  overflow-y: hidden;
  opacity: ${({ isExpanded }) => (isExpanded ? "1" : "0.7")};
  transition: top 0.5s ease-in-out, max-height 0.3s ease-in-out,
    opacity 0.3s ease-in-out;

  &.collapsed {
    top: -110px;
    opacity: 0.6;
    transition: top 0.5s ease-in-out, opacity 0.5s ease-in-out;
  }

  &:hover {
    max-height: 70%;
    opacity: 1;
  }

  @media (max-width: 768px) {
    position: fixed;
    top: 50px;
    left: 0;
    right: 0;
    width: 100%;
    height: ${({ isExpanded }) => (isExpanded ? "auto" : "0")};
    border-radius: 0;
    padding: ${({ isExpanded }) => (isExpanded ? "20px" : "0")};
    max-height: ${({ isExpanded }) => (isExpanded ? "500px" : "0")};
    overflow-y: ${({ isExpanded }) => (isExpanded ? "auto" : "hidden")};
    transition: max-height 0.4s ease, padding 0.4s ease;
    z-index: 999;
  }
`;

// Refactorización de HamburgerButton usando los colores del navbar (dorado, negro)
export const HamburgerButton = styled.button`
  display: none;
  background-color: #1c1c1c; /* Negro */
  color: #ffd700; /* Dorado */
  border: none;
  cursor: pointer;
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  padding: 10px 0;
  text-align: center;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s, color 0.3s, transform 0.2s, box-shadow 0.2s;

  &:hover {
    background-color: #333;
    color: #ffd700;
    box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.25);
  }

  &:active {
    background-color: #444;
    transform: scale(0.98);
    box-shadow: 0px 3px 12px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 0;
    z-index: 1000;
  }
`;

// Refactorización del slider usando colores del navbar (rosado suave y dorado)
export const StyledInputRange = styled(Slider)`
  color: #f4c2c2; /* Rosado suave */

  &.input-range {
    .input-range__track {
      background-color: #1c1c1c; /* Fondo negro */
    }

    .input-range__track--active {
      background-color: #1c1c1c;
    }

    .input-range__slider {
      background-color: #ffd700; /* Dorado */
      border: 1px solid #ffd700;
    }

    .input-range__label {
      color: #ffd700; /* Dorado */
    }
  }

  & .MuiSlider-thumb {
    background-color: #f4c2c2; /* Rosado suave */
  }

  & .MuiSlider-track {
    background-color: #ffd700; /* Dorado */
  }

  & .MuiSlider-rail {
    background-color: #1c1c1c; /* Negro */
  }
`;

const breakpoints = {
  tablet: "768px",
  mobile: "770px",
};
import { createGlobalStyle } from "styled-components";
export const GlobalRangeStyles = createGlobalStyle`



.hamburger-icon {
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 1000;
  background-color: ${colors.background};
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  } 
  .input-range {
    .input-range__track {
      background-color: #000 !important;
    }

    .input-range__track--active {
      background-color: #000 !important;
    }

    .input-range__slider {
      background-color: #000 !important;
      border: 1px solid #000 !important;
    }

    .input-range__label {
      color: #000 !important;
    }
  }
  a {
    text-decoration: none !important; 
  }

  body.menu-open {
    overflow: hidden; // Ya lo tienes
    position: fixed;
    width: 100%;
    height: 100vh;
  }
  .unique-modal-container {
    z-index: 1000 !important;
  }
  div[role="dialog"] {
    z-index: 1000 !important;
  }
  .ReactModal__Overlay {
    background-color: rgba(0, 0, 0, 0.5) !important; // Negro con opacidad
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
  }
  /* Estilos para los íconos sociales */
  .social-icons {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .social-icons a {
    margin: 0 15px; /* Espaciado entre los íconos */
    font-size: 28px; /* Tamaño de los íconos */
    color: #FFB6C1; /* Color rosa claro */
    transition: color 0.3s ease, transform 0.3s ease; /* Transición suave */
  }
  
  .social-icons a:hover {
    color: #FF69B4; /* Color rosa más oscuro al pasar el mouse */
    transform: scale(1.1); /* Efecto zoom al pasar el mouse */
  }
  
  /* Estilos para la edición de enlaces sociales */
  .social-links-edit-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }
  
  .social-link-field {
    display: flex;
    flex-direction: column; /* Cambiado a columna para dispositivos móviles */
    background-color: #FFF0F5; /* Fondo rosa muy claro */
    border-radius: 8px; /* Bordes redondeados */
    padding: 0.5rem;
  }
  
  .social-input {
    width: 100%; /* Ajuste del ancho para ocupar el contenedor completo */
    padding: 0.5rem;
    border: none;
    background: transparent; /* Transparente para tomar el color de fondo del contenedor */
    color: #FF69B4; /* Color rosa oscuro */
    font-size: 1rem;
    transition: all 0.3s ease; /* Transición suave */
  }
  
  .social-input::placeholder {
    color: #FFB6C1; /* Color rosa claro para el texto placeholder */
  }
  
  .social-input:focus {
    outline: none;
    box-shadow: 0 0 5px #FF69B4; /* Sombra rosa al enfocar */
  }
  
  .social-icon {
    font-size: 2rem; /* Tamaño más grande para los íconos */
    color: #FF69B4; /* Color rosa oscuro */
  }
  .Toastify__toast-container {
    /* Centrar el contenedor de tostadas en dispositivos móviles */
    @media only screen and (max-width: ${breakpoints.mobile}) {
      width: calc(100% - 20px); /* Ajusta el ancho con un poco de espacio en los lados */
      max-width: 320px; /* Establece un ancho máximo para las tostadas */
      left: 50%;
      transform: translateX(-50%);
      bottom: 1rem; /* Espacio desde el fondo de la pantalla */
    }
  }
  body {
    background: linear-gradient(to right, #f5f7fa, #ffe3e3);
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    min-height: 100vh;
  }


  .Toastify__toast {
    /* Estilos comunes para tostadas */
    border-radius: 8px; /* Bordes redondeados para un look moderno */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra suave para dar profundidad */
    margin-bottom: 1rem; /* Espacio entre tostadas */
    font-size: 0.875rem; /* Tamaño de fuente adecuado */
    padding: 16px; /* Padding interno más generoso */
    @media only screen and (max-width: ${breakpoints.mobile}) {
      margin-bottom: 0; /* En móviles, puede que no necesites espacio extra entre tostadas */
    }
  }
  p{
    color: #6e6e6e;
  }
  .Toastify__close-button {
    /* Estilos para el botón de cerrar */
    color: #999; /* Color menos llamativo para el botón */
    opacity: 0.9; /* Ligeramente transparente para no distraer */
    &:hover {
      color: #666; /* Oscurecer al pasar el ratón por encima para indicar interactividad */
    }
  }

  .Toastify__toast--error {
    /* Estilos específicos para tostadas de error */
    background-color: #fee; /* Un fondo rojo claro para indicar error */
    color: #c00; /* Texto en rojo oscuro para contraste */
  }

  .Toastify__toast--success {
    /* Estilos específicos para tostadas de éxito */
    background-color: #eaffea; /* Un fondo verde claro para indicar éxito */
    color: #080; /* Texto en verde oscuro para contraste */
  }
  .react-big-calendar .rbc-toolbar button:contains('Month') {
    display: none;
  }
  
  /* Ocultar el botón 'Agenda' */
  .react-big-calendar .rbc-toolbar button:contains('Agenda') {
    display: none;
  }

  @media (max-width: 768px) {
    .react-big-calendar .rbc-toolbar button:contains('Semana')    
      display: none !important;
    }
  }
  input[type="text"],
  input[type="email"],
  input[type="password"] {
    text-transform: lowercase !important;
  }
  
`;
