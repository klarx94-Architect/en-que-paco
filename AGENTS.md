# AGENTS.md — Restaurante Las Olivillas

> **INSTRUCCIONES PARA AGENTES IA (Antigravity, Cursor, Copilot, etc.)**
> Este documento es la fuente única de verdad para cualquier agente que trabaje en este repositorio.
> Lee este archivo completo antes de hacer cualquier cambio.

---

## ⚠️ REGLA Nº 1 — IDENTIDAD EXCLUSIVA

Este repositorio es **Únicamente** para **Restaurante Las Olivillas**.

- **PROHIBIDO** usar los términos: `Encapaco`, `ENCAPACO`, `En Que Paco`, `en-que-paco`, `Paco`, `PACO`, `paco`, `encapaco`
- Si encuentras alguno de estos términos en cualquier archivo `.jsx`, `.tsx`, `.js`, `.ts`, `.html`, `.css`, `.md` → **reemplaza inmediatamente** por el equivalente de Las Olivillas
- **PROHIBIDO** referenciar imágenes de la carpeta `/assets/bar_tapas/`, `/assets/comida/`, `/assets/nosotros/` (son assets del proyecto anterior). Usa siempre URLs de Unsplash o placeholder hasta que se suban fotos reales del restaurante
- El número de teléfono correcto para WhatsApp es **653 999 909** (`https://wa.me/34653999909`). Nunca usar `616600772` ni `684790308`

---

## 🏪 Identidad del Cliente

| Campo | Valor |
|---|---|
| **Nombre** | Restaurante Las Olivillas |
| **Propietarios** | Jose Castillo Medina y María García Castillo |
| **Dirección** | Paseo Mirasierra nº7, 18160 Güéjar Sierra, Granada |
| **Tel. Móvil / WhatsApp** | 653 999 909 |
| **Tel. Fijo** | 958 484 050 |
| **Email** | restaurantelasolivillas@hotmail.es |
| **Horario** | Miércoles a Lunes 12:00–16:00 / 20:00–00:00 |
| **Día cerrado** | Martes |
| **Instagram** | @restaurantelasolivillas |
| **Facebook** | /lasolivillasrestaurante |
| **Dominio objetivo** | lasolivillas.es |
| **Tipo de cocina** | Tradicional española / Mediterránea |
| **Descripción** | Restaurante con vistas al Valle del Genil y Sierra Nevada |

---

## 🎨 Paleta de Colores

| Token | Hex | Uso |
|---|---|---|
| `verde-oliva` | `#3D5A3E` | Acento premium |
| `crema-calida` | `#F5F0E8` | Fondo principal |
| `dorado-suave` | `#C8A96E` | sierra-gold (ya definido en Tailwind) |
| `terracota` | `#C05A2F` | terracotta-mid (ya definido en Tailwind) |
| `negro-texto` | `#1A1A1A` | neutral-dark (ya definido en Tailwind) |
| `blanco-puro` | `#FFFFFF` | pearl-white (ya definido en Tailwind) |

> Los tokens Tailwind actuales (`sierra-gold`, `terracotta-mid`, `neutral-dark`, `pearl-white`) se mantienen. El verde oliva se añadirá como `oliva-deep` cuando se haga el rediseño visual.

---

## 📁 Estructura del Proyecto

```
las-olivillas-site/
├── public/
│   └── favicon.svg              ← PENDIENTE: reemplazar con logo Las Olivillas
├── src/
│   ├── App.jsx                  ✓ Saneado
│   ├── components/
│   │   ├── home/
│   │   │   ├── Hero.jsx             ✓ Saneado
│   │   │   ├── BookingAgent.jsx     ✓ Saneado (WA: 653999909, Martes cerrado)
│   │   │   ├── InteractiveMenu.jsx  ✓ Saneado (platos Las Olivillas, imgs Unsplash)
│   │   │   ├── ServicesSection.jsx  ✓ Saneado (sin jazz ni Paco)
│   │   │   ├── DigitalMenu.jsx      ⚠️ REVISAR — puede contener referencias antiguas
│   │   │   └── EventCard.jsx        ⚠️ REVISAR — puede contener referencias antiguas
│   │   └── layout/
│   │       ├── Navbar.jsx           ✓ Saneado (logo textual Las Olivillas)
│   │       └── Footer.jsx           ✓ Saneado (datos reales)
│   ├── pages/
│   │   ├── Home.jsx             ⚠️ REVISAR
│   │   ├── Menu.jsx             ✓ Saneado (carta Las Olivillas, WA correcto)
│   │   ├── Nosotros.jsx         ✓ Saneado
│   │   └── Llegar.jsx           ✓ Saneado (dirección real, maps correcto)
│   └── lib/
├── src/assets/              ⛔ ELIMINAR — contiene fotos de Encapaco (Paco)
│   ├── bar_tapas/            ⛔ ELIMINAR COMPLETO
│   ├── comida/               ⛔ ELIMINAR COMPLETO
│   └── nosotros/             ⛔ ELIMINAR COMPLETO
├── index.html               ✓ Saneado
├── AGENTS.md                ✓ Este archivo
└── package.json
```

---

## 🔧 Infraestructura

| Elemento | Estado | Acción requerida |
|---|---|---|
| **Repo GitHub** | `klarx94-Architect/las-olivillas-site` | ✓ Correcto |
| **Rama activa** | `master` | ✓ Correcto |
| **Proyecto Vercel** | `en-que-paco-site` | ⚠️ Renombrar a `las-olivillas-site` |
| **URL actual** | `en-que-paco-site.vercel.app` | ⚠️ Cambiar tras renombrar |
| **Dominio final** | `lasolivillas.es` | ⚠️ Conectar en Vercel Dashboard |
| **Supabase** | No conectado aun | ⏳ Pendiente |

---

## 📋 Tareas Pendientes para el Agente

Ordenadas por prioridad:

### PRIORIDAD ALTA — Saneamiento
1. **Eliminar carpetas de assets** `src/assets/bar_tapas/`, `src/assets/comida/`, `src/assets/nosotros/`
   ```bash
   git rm -r src/assets/bar_tapas/ src/assets/comida/ src/assets/nosotros/
   git commit -m "chore: eliminar assets de Encapaco"
   git push
   ```
2. **Revisar y sanear** `DigitalMenu.jsx`, `EventCard.jsx`, `Home.jsx` — eliminar cualquier referencia a Paco/Encapaco
3. **Crear favicon** con aceituna o iniciales LO para `public/favicon.svg`

### PRIORIDAD MEDIA — Diseño
4. Actualizar `tailwind.config.js` para añadir color `oliva-deep: '#3D5A3E'`
5. Rediseñar Hero con fotos reales de Las Olivillas (cuando el cliente las facilite)
6. Crear página `/admin-olivillas` — panel de reservas conectado a Supabase

### PRIORIDAD BAJA — Funcionalidad
7. Conectar Supabase para persistir reservas
8. Crear tabla `reservas` en Supabase con campos: `nombre`, `telefono`, `fecha`, `hora`, `personas`, `zona`, `estado`
9. Enviar notificación WhatsApp al dueño cuando llega una reserva nueva

---

## 🛡️ Variables de Entorno

```env
VITE_SUPABASE_URL=        # URL del proyecto Supabase
VITE_SUPABASE_ANON_KEY=   # Anon key pública de Supabase
VITE_WA_NUMBER=34653999909
```

<!-- VERCEL BEST PRACTICES -->
## Best practices for developing on Vercel
- Treat Vercel Functions as stateless + ephemeral
- Store secrets in Vercel Env Variables; not in git
- Use `vercel env pull` for local parity
- Enable Web Analytics + Speed Insights early
