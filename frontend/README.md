# SABBATH FRONTEND CLIENT
### *Experiencia de Usuario e Interfaz Digital*

---

## 1. Visión General

El **Sabbath Frontend Client** representa la cara digital de nuestra organización. Desarrollado con tecnología de punta utilizando **Vite** y **React**, este proyecto entrega una experiencia de usuario (UX) fluida, performante y estéticamente superior. El diseño visual se gestiona mediante **TailwindCSS**, asegurando consistencia y adaptabilidad (responsive design).

## 2. Tecnologías Clave

*   **Core Framework**: React 18+ (Hooks, Functional Components)
*   **Build Tool**: Vite (HMR ultra-rápido, Builds optimizados)
*   **Estilizado**: TailwindCSS + PostCSS
*   **Routing**: React Router DOM
*   **Integración API**: Axios
*   **Utilidades Multimedia**: html5-qrcode, html2canvas

## 3. Manual de Operaciones

### 3.1 Instalación y Despliegue Local

Para iniciar el ciclo de desarrollo en la capa de presentación:

1.  **Instalación de Módulos**:
    Navegue al directorio y ejecute el gestor de paquetes.
    ```bash
    cd frontend
    npm install
    ```

2.  **Servidor de Desarrollo**:
    Inicie la instancia local con recarga en caliente (HMR).
    ```bash
    npm run dev
    ```
    El aplicativo estará disponible generalmente en `http://localhost:5173`.

3.  **Compilación para Producción**:
    Para generar los artifos optimizados para despliegue:
    ```bash
    npm run build
    ```
    Los archivos resultantes se encontrarán en el directorio `dist/`.

### 3.2 Arquitectura de Componentes

El proyecto sigue una estructura fractal y modular:

*   `/src/components`: Bloques de construcción UI reutilizables (Botones, Inputs, Cards).
*   `/src/pages`: Vistas completas que componen las rutas de la aplicación.
*   `/src/assets`: Recursos estáticos (Imágenes, Iconos).
*   `/src/context` (Opcional): Gestión de estado global.

## 4. Guías de Estilo y UX

*   **Diseño**: Seguir estrictamente los tokens de diseño definidos en `tailwind.config.js`. No utilizar estilos en línea (inline styles) a menos que sea estrictamente necesario.
*   **Responsividad**: Todas las interfaces deben ser "Mobile-First" y adaptarse perfectamente a pantallas de escritorio.
*   **Accesibilidad**: Asegurar que los componentes interactivos sean accesibles (uso de etiquetas aria, contraste adecuado).

---

**Sabbath Design & Frontend Division**
*Innovación Visual y Funcionalidad Superior*
