<div align="center">

# 🌿 Tierra Verde

### Plataforma de Inversión en Terrenos y Lotes Rurales

<br/>

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

<br/>

<!-- 🖼️ CAPTURA DE PANTALLA — Reemplaza la ruta con una imagen real del proyecto -->
<!-- ![Vista previa de Tierra Verde](./docs/preview.png) -->
`📸 Agrega aquí una captura de pantalla del proyecto`

<br/>

</div>

---

## 🌱 Acerca del proyecto

**Tierra Verde** es una aplicación web diseñada para facilitar la inversión en terrenos y lotes rurales en Colombia. La plataforma ofrece un catálogo completo de propiedades con información detallada sobre ubicación, documentación legal, atributos técnicos y análisis de rentabilidad, permitiendo a los usuarios tomar decisiones de inversión informadas desde la comodidad de su navegador.

> Construida con las últimas versiones de **Next.js 16**, **React 19** y **Tailwind CSS 4** para ofrecer una experiencia rápida, moderna y totalmente responsiva.

---

## ✨ Características

<table>
  <tr>
    <td align="center" width="33%">
      <h3>🏡</h3>
      <b>Catálogo de propiedades</b><br/>
      Explora terrenos con búsqueda y filtros por ubicación y tipo de inversión.
    </td>
    <td align="center" width="33%">
      <h3>📄</h3>
      <b>Detalle completo</b><br/>
      Galería de imágenes, atributos técnicos, documentación legal y rentabilidad.
    </td>
    <td align="center" width="33%">
      <h3>📊</h3>
      <b>Categorías de inversión</b><br/>
      Terrenos agrícolas, recreativos y más, organizados por tipo.
    </td>
  </tr>
  <tr>
    <td align="center" width="33%">
      <h3>🧭</h3>
      <b>Navegación fluida</b><br/>
      Rutas dinámicas con Next.js App Router y transiciones SPA.
    </td>
    <td align="center" width="33%">
      <h3>📱</h3>
      <b>Diseño responsivo</b><br/>
      Adaptado a móviles, tablets y escritorio.
    </td>
    <td align="center" width="33%">
      <h3>⚡</h3>
      <b>Rendimiento óptimo</b><br/>
      Server Components y optimización automática de fuentes e imágenes.
    </td>
  </tr>
</table>

---

## 🛠️ Stack tecnológico

| Tecnología | Versión | Descripción |
|:---:|:---:|---|
| <img src="https://cdn.simpleicons.org/nextdotjs/000" width="20"/> **Next.js** | `16` | Framework fullstack con App Router |
| <img src="https://cdn.simpleicons.org/react/61DAFB" width="20"/> **React** | `19` | Biblioteca de interfaz de usuario |
| <img src="https://cdn.simpleicons.org/typescript/3178C6" width="20"/> **TypeScript** | `5` | Tipado estático |
| <img src="https://cdn.simpleicons.org/tailwindcss/06B6D4" width="20"/> **Tailwind CSS** | `4` | Framework de estilos utilitarios |
| <img src="https://cdn.simpleicons.org/lucide/F56565" width="20"/> **Lucide React** | `0.574` | Librería de iconos |

---

## 📁 Estructura del proyecto

```
tierra-verde/
│
├── 📂 public/                        # Archivos estáticos
│
├── 📂 src/
│   ├── 📂 app/                       # Rutas (App Router)
│   │   ├── 📄 page.tsx               # Landing principal
│   │   ├── 📄 layout.tsx             # Layout global
│   │   ├── 🎨 globals.css            # Estilos globales
│   │   └── 📂 propiedades/
│   │       ├── 📄 page.tsx           # Listado de propiedades
│   │       └── 📂 [id]/
│   │           └── 📄 page.tsx       # Detalle de propiedad
│   │
│   └── 📂 components/
│       ├── 🔵 atoms/                 # Componentes básicos
│       │   └── Button, Badge, Logo, NavLink, SectionLabel
│       ├── 🟡 molecules/             # Componentes compuestos
│       │   └── SearchBar, StatCounter, StepCard, FooterColumn
│       ├── 🟢 organisms/             # Secciones completas
│       │   ├── Header, Hero, Footer, CTASection, FeaturedProperties
│       │   └── 📂 detail/            # Componentes de detalle
│       │       └── HeroGallery, Sidebar, Profitability, LegalVerification
│       └── 🟣 templates/             # Plantillas de página
│           └── LandingTemplate, PropertiesListingTemplate, PropertyDetailTemplate
```

---

## 🚀 Inicio rápido

### Requisitos previos

| Herramienta | Versión mínima |
|:---:|:---:|
| 🟢 Node.js | `≥ 18` |
| 📦 npm / yarn / pnpm / bun | Última estable |

### ⚙️ Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/tierra-verde.git

# Entrar al directorio
cd tierra-verde

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

🌐 Abre **[http://localhost:3000](http://localhost:3000)** en tu navegador.

---

## 📜 Scripts disponibles

| Comando | Descripción |
|---|---|
| ▶️ `npm run dev` | Inicia el servidor de desarrollo con hot reload |
| 📦 `npm run build` | Genera la build optimizada de producción |
| 🟢 `npm run start` | Sirve la build de producción localmente |
| 🔍 `npm run lint` | Analiza el código con ESLint |

---

## 📚 Recursos

| Recurso | Enlace |
|---|---|
| 📖 Documentación de Next.js | [nextjs.org/docs](https://nextjs.org/docs) |
| 🎓 Tutorial interactivo | [nextjs.org/learn](https://nextjs.org/learn) |
| 🎨 Documentación de Tailwind | [tailwindcss.com/docs](https://tailwindcss.com/docs) |
| 🔷 Documentación de TypeScript | [typescriptlang.org/docs](https://www.typescriptlang.org/docs/) |

---

## 📄 Licencia

Este proyecto es **privado** y de uso **académico**.

---

<div align="center">

Hecho con 💚 por **Tierra Verde**

</div>
