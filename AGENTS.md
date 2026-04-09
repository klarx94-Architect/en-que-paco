# AGENTS.md — Restaurante Las Olivillas

> **INSTRUCCIONES PARA AGENTES IA (Antigravity, Cursor, Copilot, etc.)**
> Este documento es la fuente única de verdad para cualquier agente que trabaje en este repositorio.
> Lee este archivo completo antes de hacer cualquier cambio.

---

## ⚠️ REGLA Nº 1 — IDENTIDAD EXCLUSIVA

Este repositorio es **Únicamente** para **Restaurante Las Olivillas**.

- **PROHIBIDO** usar los términos: `Encapaco`, `ENCAPACO`, `En Que Paco`, `en-que-paco`, `Paco`, `PACO`, `paco`, `encapaco`
- El número de teléfono correcto para WhatsApp es **653 999 909** (`https://wa.me/34653999909`). Nunca usar `616600772` ni `684790308`.

---

## 🏪 Identidad del Cliente

| Campo | Valor |
|---|---|
| **Nombre** | Restaurante Las Olivillas |
| **Jose Castillo Medina y María García Castillo** | Propietarios |
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

---

## 🎨 Paleta de Colores

| Token | Hex | Uso |
|---|---|---|
| `verde-oliva` | `#3D5A3E` | Acento premium |
| `crema-calida` | `#F5F0E8` | Fondo principal |
| `dorado-suave` | `#C8A96E` | sierra-gold (ya definido en Tailwind) |
| `terracota` | `#C05A2F` | terracotta-mid (ya definido en Tailwind) |
| `oliva-deep` | `#3D5A3E` | Brand Primary (Added in Session 3) |

---

## 📁 Estructura del Proyecto

```
las-olivillas-site/
├── public/
│   └── favicon.svg              ✓ Saneado (Logo LO en verde/oro)
├── src/
│   ├── App.jsx                  ✓ Saneado
│   ├── components/
│   │   ├── home/
│   │   │   ├── Hero.jsx             ✓ Saneado
│   │   │   ├── BookingAgent.jsx     ✓ Saneado
│   │   │   ├── InteractiveMenu.jsx  ✓ Saneado
│   │   │   ├── ServicesSection.jsx  ✓ Saneado
│   │   │   ├── DigitalMenu.jsx      ✓ Saneado
│   │   │   └── EventCard.jsx        ✓ Saneado
│   │   └── layout/
│   │       ├── Navbar.jsx           ✓ Saneado
│   │       ├── Footer.jsx           ✓ Saneado
│   │       └── AgentButton.jsx      ✓ Saneado (WA corregido)
│   ├── pages/
│   │   ├── Home.jsx             ✓ Saneado (Natural Tradition)
│   │   ├── Menu.jsx             ✓ Saneado
│   │   ├── Nosotros.jsx         ✓ Saneado
│   │   └── Llegar.jsx           ✓ Saneado
├── index.html               ✓ Saneado
├── AGENTS.md                ✓ Este archivo
└── package.json             ✓ Renombrado a las-olivillas-site
```

---

## 🔧 Infraestructura

| Elemento | Estado | Acción requerida |
|---|---|---|
| **Repo GitHub** | `klarx94-Architect/las-olivillas-site` | ✓ Correcto |
| **Rama activa** | `master` | ✓ Correcto |
| **Proyecto Vercel** | `las-olivillas-site` | ✓ Renombrado |
| **URL actual** | `las-olivillas-site.vercel.app` | ✓ Actualizada |
| **Dominio final** | `lasolivillas.es` | ⏳ Pendiente conexión |
| **Supabase** | No conectado | ⏳ Fase posterior |

---

## 📋 Tareas Completadas (Session 3)

1. **Renombrar proyecto en Vercel**: ✓ Completado por Kleiver
2. **Saneamiento de Home.jsx y EventCards**: ✓ Completado
3. **Búsqueda global de remanentes**: ✓ Completado (Clean Sweep)
4. **Actualizar package.json**: ✓ Completado
5. **Crear favicon.svg**: ✓ Completado

### Próximas Tareas (Rediseño Visual — esperar briefing de Perplexity)
- Rediseñar Hero con fotos reales.
- Actualizar componentes con `oliva-deep`.
- Integrar Supabase para reservas.

---

## 📡 Canal AI-to-AI

Ver carpeta `.ai-channel/` para comunicación.
- Perplexity escribe en: `.ai-channel/FROM_PERPLEXITY.md`
- Antigravity escribe en: `.ai-channel/FROM_ANTIGRAVITY.md` **(OBLIGATORIO al finalizar cada sesión)**

---

## Best practices for developing on Vercel
- Treat Vercel Functions as stateless + ephemeral
- Store secrets in Vercel Env Variables; not in git
- Use `vercel env pull` for local parity
- Enable Web Analytics + Speed Insights early
