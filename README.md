# 💇‍♀️ Peluquería The Best - Frontend 💅

![Next.js](https://img.shields.io/badge/Next.js-14.2.10-blue) 
![React](https://img.shields.io/badge/React-18.0-blue) 
![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-%5E2.2.7-purple) 
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-%5E3.4.1-lightblue)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-%5E11.5.4-red) 
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black)

Bienvenido al **Frontend** de la plataforma de gestión y e-commerce para la **Peluquería The Best**. Este proyecto utiliza **Next.js**, **React**, **Redux Toolkit**, **Tailwind CSS** y **Framer Motion** para ofrecer una experiencia moderna y atractiva a los usuarios.

## 🌟 **Características Principales**

- 🛒 **E-commerce**: Los usuarios pueden explorar productos, agregarlos al carrito y realizar compras mediante **Mercado Pago** o **Transferencia Bancaria**.
- 🖼️ **Carrousel 3D**: Muestra productos destacados en un carrusel interactivo.
- 🔄 **Actualizaciones en Tiempo Real**: WebSockets para sincronización de información.
- 📊 **Panel de Administración**: Gestiona productos, órdenes y empleados asignados.
- 🔐 **Autenticación JWT**: Autenticación segura con tokens **JWT**.
- 💅 **Diseño Moderno**: Interfaz creada con **Tailwind CSS** y animaciones suaves.

## 🛠️ **Tecnologías Utilizadas**

- **Next.js** 14+
- **React**
- **Redux Toolkit**
- **Tailwind CSS**
- **Framer Motion**
- **Socket.IO**
- **Chart.js**

## 📦 **Instalación y Ejecución**

1. Clona este repositorio:
   ```bash
   git clone https://github.com/sofia1550/PeluqueriaTheBest.git
   ```

2. Instala las dependencias:
   ```bash
   cd PeluqueriaTheBest
   npm install
   ```

3. Configura las variables de entorno en `.env.local`:
   ```bash
   NEXT_PUBLIC_API_BASE_URL=https://backendiaecommerce.onrender.com
   ```

4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

5. Abre `http://localhost:3000` en tu navegador para ver la aplicación.

## 📂 **Estructura del Proyecto**

```bash
├── components      # Componentes reutilizables de la interfaz
├── pages           # Páginas del proyecto gestionadas por Next.js
├── public          # Archivos públicos (imágenes, etc.)
├── redux           # Configuración de Redux y slices
├── styles          # Estilos globales y específicos
└── utils           # Funciones helper y utilidades
```

## 🌐 **Enlaces**

- **Demo del Proyecto**: [https://peluqueria-the-best.vercel.app/](https://peluqueria-the-best.vercel.app/)
- **Backend**: [Repositorio del Backend](https://github.com/sofia1550/backendIAEcommerce)
- **LinkedIn**: [Conéctate conmigo](https://www.linkedin.com/in/sofia1550/)

## 🛡️ **Seguridad**

- **JWT** para autenticación segura.
- **Helmet** y **express-rate-limit** implementados en el backend.

## 🤝 **Contribuciones**

¡Contribuciones y PRs son bienvenidos! Siéntete libre de abrir un **Pull Request** o reportar un **issue**. 😊

---

Desarrollado con 💖 por [Nicolas Luciuk](https://www.linkedin.com/in/nicolas-luciuk/)
