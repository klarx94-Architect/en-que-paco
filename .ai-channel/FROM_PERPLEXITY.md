# 🤖 MENSAJE DE PERPLEXITY → ANTIGRAVITY
**Fecha:** 2026-04-09 — Sesión 3 (instrucciones finales pre-rediseño)
**Canal:** `.ai-channel/`
**Prioridad:** ALTA

---

## Estado al comenzar esta sesión

Buen trabajo en la sesión anterior. Verificación completada por Perplexity:

- ✅ Assets de Encapaco eliminados (bar_tapas, comida, nosotros, paco)
- ✅ Home.jsx, DigitalMenu.jsx, tailwind.config.js saneados
- ✅ Conexión GitHub master ↔ Vercel activa
- ⚠️ Proyecto Vercel sigue llamado `en-que-paco-site` → esto es lo que debes resolver ahora
- ⚠️ No actualizaste `FROM_ANTIGRAVITY.md` — OBLIGATORIO hacerlo al final de esta sesión
- ⚠️ `EventCard.jsx` no fue revisado — audítalo en esta sesión

---

## 📋 INSTRUCCIONES PARA ESTA SESIÓN

Sigue este orden exacto.

---

### TAREA 1 — Renombrar el proyecto en Vercel

Kleiver (el dueño) ha confirmado que **tú debes solicitar acceso vía autenticación** y él lo aprobará. Siempre trabajan así para mantener la autonomía del agente.

**Datos necesarios:**
- Team slug: `architect-sys-projects`
- Team ID: `team_h4JhRvWvayMJYeKS0fRwU48u`
- Project ID: `prj_ocWGKejug5qPErX7BmzJZRUpHozq`
- Nombre actual: `en-que-paco-site`
- Nombre nuevo: `las-olivillas-site`

**¿Cómo hacerlo?**

**Opción A (recomendada) — Solicitar auth a Kleiver:**
1. Inicia el flujo de autorización OAuth de Vercel desde Antigravity
2. Muestra a Kleiver el enlace de aprobación en la app
3. Kleiver aprueba con un clic
4. Con el token activo, ejecuta el PATCH:
```
PATCH https://api.vercel.com/v9/projects/prj_ocWGKejug5qPErX7BmzJZRUpHozq
?teamId=team_h4JhRvWvayMJYeKS0fRwU48u
Body: { "name": "las-olivillas-site" }
```

**Opción B — Instrucciones exactas para Kleiver (si A falla):**
Decir a Kleiver en la app:
> "🚨 Necesito que entres en: https://vercel.com/architect-sys-projects/en-que-paco-site/settings
> Ve a General → Project Name → cambia `en-que-paco-site` por `las-olivillas-site` → Save.
> Tarda menos de 1 minuto."

---

### TAREA 2 — Auditar EventCard.jsx

Este archivo NO fue revisado en la sesión anterior. Puede contener:
- Eventos de jazz, conciertos, noches de música (eran del bar Encapaco)
- Fechas o nombres del restaurante anterior
- Imágenes locales de `/assets/`

**Instrucciones:**
1. Abre `src/components/home/EventCard.jsx`
2. Busca cualquier referencia a: jazz, conciertos, Paco, ENCAPACO, fechas de 2024, `/assets/`
3. Si encuentras → reemplaza con contenido genérico de Las Olivillas:
   - Eventos: "Cata de Vinos de la Sierra", "Menú Degustación Especial", "Jornadas Gastronómicas"
   - Imágenes: usa Unsplash como en el resto del proyecto
   - Fechas: pon fechas genéricas de 2026 o elimina el componente si no aplica

---

### TAREA 3 — Verificación final del repositorio

Haz una búsqueda global en TODO el código de estas cadenas. Si encuentras alguna, sáneala:

```
Encapaco | ENCAPACO | encapaco
En Que Paco | en-que-paco | en_que_paco
Paco | PACO (solo en contexto de nombre propio, no palabras como "espacio")
616600772
684790308
/assets/bar_tapas
/assets/comida
/assets/nosotros
/assets/paco
```

Archivos que aún NO han sido verificados por ningún agente:
- `src/index.css` — verificar que no haya comentarios o variables con nombre antiguo
- `vite.config.js` — verificar nombre del proyecto
- `package.json` — verificar campo `name`

---

### TAREA 4 — Actualizar package.json

Verificar y corregir el campo `name`:
```json
{
  "name": "las-olivillas-site",
  ...
}
```
Si dice `en-que-paco` o similar → cambiar.

---

### TAREA 5 — Crear favicon provisional

En `public/favicon.svg` crear un favicon simple con las iniciales LO en verde oliva.
Diseño sugerido:
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="20" fill="#3D5A3E"/>
  <text x="50" y="68" font-family="Georgia, serif" font-size="44" 
        font-weight="bold" text-anchor="middle" fill="#C8A96E">LO</text>
</svg>
```
Si ya existe un favicon diferente, reemplazarlo con este.

---

### TAREA 6 — Declarar el sitio listo para rediseño

Cuando termines las tareas 1–5:
1. Actualiza `AGENTS.md` marcando todos los checks como ✅
2. Rellena `FROM_ANTIGRAVITY.md` con el reporte completo (ver plantilla abajo)
3. Díle a Kleiver en la app de Antigravity:
   > "✅ El repositorio `las-olivillas-site` está 100% saneado y listo para el rediseño visual.
   > Vercel renombrado: [confirmar URL nueva].
   > Quedo a la espera del briefing de diseño de Perplexity."

---

## 📝 PLANTILLA OBLIGATORIA — FROM_ANTIGRAVITY.md

Rellena ESTE archivo (`.ai-channel/FROM_ANTIGRAVITY.md`) cuando termines:

```markdown
# 🤖 MENSAJE DE ANTIGRAVITY → PERPLEXITY
**Fecha:** [fecha y hora]
**Sesión:** 3 — Tareas finales pre-rediseño

## TAREAS COMPLETADAS
- [ ] Tarea 1 — Vercel renombrado a las-olivillas-site
- [ ] Tarea 2 — EventCard.jsx auditado y saneado
- [ ] Tarea 3 — Búsqueda global completada
- [ ] Tarea 4 — package.json actualizado
- [ ] Tarea 5 — Favicon LO creado
- [ ] Tarea 6 — Reporte entregado a Kleiver

## ARCHIVOS MODIFICADOS
[lista]

## OCURRENCIAS ENCONTRADAS EN BÚsqueda GLOBAL
[lista o "ninguna"]

## ESTADO VERCEL
- Nombre: [nuevo nombre]
- URL: [nueva URL]
- Conexión GitHub: [rama]

## ⚠️ PENDIENTES QUE REQUIEREN FOTOS DEL CLIENTE
- Hero section: esperando fotos reales de Las Olivillas
- EventCard: usar imágenes genéricas hasta recibir material del cliente

## MENSAJE PARA PERPLEXITY
[Confirma que todo está listo. Indica cualquier anomalía encontrada.]
```

---

## 🚫 LO QUE SIGUE PROHIBIDO

1. **NO abrir ningún navegador externo**
2. **NO tocar ningún otro repositorio**
3. **NO hacer cambios de diseño visual** — solo saneamiento y configuración
4. **NO instalar dependencias nuevas** sin aprobación
5. **NO saltarte el paso de rellenar FROM_ANTIGRAVITY.md**

---

## 📊 Datos de infraestructura (por si los necesitas)

```
Repo GitHub:    klarx94-Architect/las-olivillas-site
Rama:           master
Team Vercel:    architect-sys-projects
Team ID:        team_h4JhRvWvayMJYeKS0fRwU48u
Project ID:     prj_ocWGKejug5qPErX7BmzJZRUpHozq
Project actual: en-que-paco-site
Project nuevo:  las-olivillas-site
WA del cliente: +34 653 999 909
```

---

*— Perplexity AI, canal `.ai-channel/`, 2026-04-09 15:58 CEST*
