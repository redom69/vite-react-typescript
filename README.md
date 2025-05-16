# License List
Este proyecto ha sido desarrollado como parte de una prueba tecnica para la posicion de Frontend Developer en the cliff.

Tiempo total invertido: Aproximadamente 1h y 16 minutos
- ~30 minutos dedicados a la configuración del proyecto desde cero con las tecnologias requeridas.
- ~45 minutos en la implementación de las paginas, test unitarios, estilos y algunas de las features opcionales.

Sin contar el tiempo en realizar el Readme.md que ha sido alrededor de 10 minutos.

---
## Stack

- **Vite** – Bundler para desarrollo y build  
- **React + TypeScript** – Librería base de componentes con tipado estricto  
- **TailwindCSS** – Utilidades CSS para un diseño rápido, limpio y responsivo  
- **PrimeReact + PrimeIcons** – Componentes UI (tablas, botones, modal)  
- **React Hook Form** – Manejo de formularios y validación simple  
- **TanStack Query** – Gestión de datos y caché para llamadas a API  
- **TanStack Router** – Enrutamiento moderno con soporte tipo React Router  
- **Jest + React Testing Library** – Pruebas unitarias robustas para componentes  
- **React Hot Toast** – Notificaciones rápidas y accesibles  
- **Recharts** – Visualización de datos con gráficos (barras, pastel, etc.)
---
## Setup

### 1. Clonar el repositorio
```
git clone https://github.com/redom69/vite-react-typescript.git
cd vite-react-typescript
```

### 2. Instalar dependencias
```
npm install
```

### 3. Ejecutar el proyecto en local
```
npm run dev
```

### 4. Test (opcional)
```
npm run test
```

---

## Decisiones Técnicas

En esta sección explico brevemente las decisiones que tomé a la hora de seleccionar el stack y organizar la arquitectura del proyecto:

- El resto de las librerías las seleccioné por afinidad y eficiencia, buscando trabajar con un stack con el que me siento cómodo y ágil.
- Utilicé **PrimeReact** porque es una librería bastante visual y con la que he trabajado recientemente. Para una POC me parece que aporta estilo rápidamente y mejora la apariencia general sin demasiado esfuerzo.
- A nivel visual, empleé **PrimeIcons** para aportar un toque visual adicional con muy poco código, mejorando así la experiencia de usuario.
- Incorporé **React Hot Toast** para que el usuario tenga feedback visual inmediato al realizar acciones dentro de la aplicación.
- Utilicé **Recharts** porque ya la había usado recientemente y encajaba bien para cubrir el objetivo opcional de representar visualmente el resumen de licencias.
- Toda la gestión de datos, queries y rutas la desarrollé usando **TanStack** (Query y Router).
- Finalmente, utilicé **ChatGPT** como apoyo para la redacción del `README.md` y para resolver algunas dudas técnicas puntuales sobre configuración de tests unitarios.

---

## Mejoras y Opcionales Pendientes

Este repositorio cumple con todos los requerimientos básicos y la mayoría de los opcionales. A continuación, explico por qué no se han implementado algunos elementos opcionales y qué mejoras podrían añadirse al proyecto:

- Se podría mejorar el sistema de notificaciones utilizando un componente más visual, que permita una personalización avanzada.
- Se podría implementar un sistema de control de permisos por roles. Por ejemplo:
  - Usuarios base: solo visualización de licencias.
  - Usuarios de sistemas: edición de tipologías.
  - Administradores: acceso completo.
- Se podría añadir un `Dockerfile` para facilitar el despliegue en contenedores.
- Utilicé **Formik**, un gestor de formularios bastante potente y con el que estoy familiarizado, aunque en este caso opté por `react-hook-form` por que era lo que requeria el enunciado.
- Sería recomendable implementar tests e2e con **Cypress** para validar el flujo completo de usuario.
- También se podría implementar **persistencia local** mediante `localStorage`, para almacenar información como el token de acceso o el rol del usuario.
- Mejoras visuales de **UI/UX**: con la colaboración de un diseñador gráfico, la estética general de la aplicación podría evolucionar notablemente.