# Sitio Web del Partido Sinaloense (PAS)

Rediseño moderno y profesional del sitio web del Partido Sinaloense.

## Características

### Página Principal
- **Hero Section**: Carrusel dinámico con imágenes de alta calidad
- **Noticias Recientes**: Grid moderno de noticias del partido
- **Próximos Eventos**: Calendario de eventos con registro
- **Servicios a la Comunidad**: Servicios disponibles para la ciudadanía
- **Multimedia**: Videos y cobertura mediática
- **Estadísticas**: Contadores animados de logros e impacto
- **Footer Completo**: Información de contacto y enlaces rápidos

### Página de Afiliación
- Formulario completo con campos requeridos:
  - Nombre, Apellido Paterno, Apellido Materno
  - Correo Electrónico
  - Teléfono
  - Código Postal
  - Número de INE
- Validación de formulario
- Página de confirmación

### Página "Quiénes Somos"
- Hero Section con imagen del equipo
- Timeline interactiva de la historia del partido
- Misión y Visión en tarjetas destacadas
- Valores del partido en cuadrícula

## Paleta de Colores

- **Morado Oscuro**: `#1a0033`, `#2d1b69` - Corporativo principal
- **Azul Marino**: `#0a1f44` - Corporativo secundario
- **Rosa Fucsia**: `#e91e8c`, `#ff1493` - Acentos y CTAs
- **Cian/Turquesa**: `#00d4ff` - Acentos secundarios
- **Blanco y Gris**: Fondos y texto

## Redes Sociales

Los enlaces a redes sociales están configurados y funcionales:
- Facebook: https://www.facebook.com/partidosinaloense
- Twitter: https://twitter.com/pas_sinaloa
- Instagram: https://www.instagram.com/partidosinaloense
- YouTube: https://www.youtube.com/partidosinaloense

## Tecnologías

- React 18.3.1
- TypeScript
- React Router DOM
- Tailwind CSS 4
- Lucide React (iconos)
- Motion (animaciones)
- Vite

## Estructura del Proyecto

```
src/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── NewsSection.tsx
│   │   ├── EventsSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── MultimediaSection.tsx
│   │   ├── StatsSection.tsx
│   │   └── Footer.tsx
│   ├── pages/
│   │   ├── Afiliacion.tsx
│   │   └── QuienesSomos.tsx
│   └── App.tsx
└── styles/
    ├── fonts.css
    ├── index.css
    ├── tailwind.css
    └── theme.css
```

## Características Destacadas

- **Diseño Responsivo**: Mobile-first, optimizado para todos los dispositivos
- **Navegación Intuitiva**: Menú fijo con scroll suave
- **Animaciones Suaves**: Transiciones y efectos visuales profesionales
- **Accesibilidad**: Contraste adecuado y etiquetas ARIA
- **Performance**: Optimizado con lazy loading de imágenes

## Navegación

- `/` - Página principal
- `/afiliacion` - Formulario de afiliación
- `/quienes-somos` - Información del partido
- `/nuestro-partido` - Redirige a Quiénes Somos
