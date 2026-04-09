# 🤖 MENSAJE DE PERPLEXITY → ANTIGRAVITY
**Fecha:** 2026-04-09  
**Canal:** `.ai-channel/`  
**Prioridad:** ALTA  

---

## Hola Antigravity.

Soy Perplexity. He estado trabajando con el dueño (Kleiver) en el saneamiento de este repositorio.
Este canal es nuestra forma de comunicarnos sin intermediarios. Lee este archivo ímtegramente antes de actuar.

---

## 📊 ESTADO DEL PROYECTO AL ENTREGARTE

### ✅ Lo que yo (Perplexity) ya hice:

| Archivo | Acción | Estado |
|---|---|---|
| `src/components/home/BookingAgent.jsx` | Eliminado ENCAPACO, WA corregido a 653999909, Martes como día cerrado | ✅ LIMPIO |
| `src/components/home/InteractiveMenu.jsx` | Platos de Encapaco eliminados, platos reales Las Olivillas, imágenes Unsplash | ✅ LIMPIO |
| `src/components/home/ServicesSection.jsx` | Eliminado "Paco director de orquesta", "Jazz de la Tarde", imágenes locales | ✅ LIMPIO |
| `src/pages/Menu.jsx` | Eliminados "Bocadillo Especial ENCAPACO" y "Pizza ENCAPACO", WA corregido, teléfonos correctos | ✅ LIMPIO |
| `src/pages/Nosotros.jsx` | Saneado en sesión anterior | ✅ LIMPIO |
| `src/pages/Llegar.jsx` | Dirección real, Google Maps correcto | ✅ LIMPIO |
| `src/components/layout/Navbar.jsx` | Logo textual Las Olivillas | ✅ LIMPIO |
| `src/components/layout/Footer.jsx` | Datos reales del restaurante | ✅ LIMPIO |
| `index.html` | Título y meta tags actualizados | ✅ LIMPIO |
| `AGENTS.md` | Creado — fuente de verdad del proyecto | ✅ EXISTE |

---

### ⚠️ Lo que TÚ (Antigravity) debes hacer ahora:

Sigue este orden exacto. No saltes pasos.

---

## 📋 INSTRUCCIONES PARA ANTIGRAVITY — PASO A PASO

### FASE 1 — Verificación inicial (NO abrir navegador externo)

**Paso 1.1** — Confirma que estás trabajando SOLO en este repositorio:
- Repositorio: `klarx94-Architect/las-olivillas-site`
- Rama activa: `master`
- ❌ PROHIBIDO tocar, leer o modificar cualquier otro repositorio

**Paso 1.2** — Lee estos archivos para entender el estado actual:
1. `AGENTS.md` — mapa completo del proyecto
2. `src/App.jsx` — rutas de la app
3. `package.json` — dependencias

**Paso 1.3** — Busca en TODO el código cualquier ocurrencia de estas palabras clave:
```
Encapaco | ENCAPACO | encapaco | En Que Paco | en-que-paco | Paco | PACO
616600772 | 684790308
/assets/bar_tapas | /assets/comida | /assets/nosotros
```
Lista todos los archivos donde las encuentres. No borres nada aún.

---

### FASE 2 — Saneamiento de archivos pendientes

ArchivoS que PODRÍAN tener restos (yo no pude verificarlos todos):

- `src/components/home/DigitalMenu.jsx`
- `src/components/home/EventCard.jsx`  
- `src/pages/Home.jsx`
- Cualquier archivo `.css` o de estilos globales
- `vite.config.js` o `tailwind.config.js` (verificar nombres de proyecto)

**Para cada uno:** si encuentras referencias a Encapaco/Paco → reemplaza por el equivalente de Las Olivillas según la tabla de identidad en `AGENTS.md`.

---

### FASE 3 — Eliminar assets de Encapaco del repositorio

Esto es crítico. Las carpetas siguientes contienen FOTOS DEL PROYECTO ANTERIOR:

```
src/assets/bar_tapas/
src/assets/comida/
src/assets/nosotros/
```

Para eliminarlas usa la herramienta de GitHub de Antigravity (delete file por cada archivo binario), o ejecuta:
```bash
git rm -r src/assets/bar_tapas/ src/assets/comida/ src/assets/nosotros/
git commit -m "chore: eliminar todos los assets de Encapaco"
git push origin master
```

ℹ️ Las imágenes en el código ya apuntan a Unsplash, no a estas carpetas locales. Eliminarlas es seguro.

---

### FASE 4 — Renombrar el proyecto en Vercel (SIN abrir navegador)

Utiliza la API de Vercel o las herramientas MCP de Antigravity:

- **Team ID:** `team_h4JhRvWvayMJYeKS0fRwU48u`
- **Team slug:** `architect-sys-projects`
- **Proyecto actual:** `en-que-paco-site`
- **Nombre nuevo:** `las-olivillas-site`
- **Endpoint API:** `PATCH https://api.vercel.com/v9/projects/en-que-paco-site?teamId=team_h4JhRvWvayMJYeKS0fRwU48u`
- **Body:** `{ "name": "las-olivillas-site" }`

Si Antigravity tiene acceso a la API de Vercel con token, puede hacerlo directamente. Si no, dejar nota en `AGENTS.md` para que Kleiver lo haga manualmente.

---

### FASE 5 — Verificar conexión GitHub ↔ Vercel

ConfiRmar que el proyecto Vercel está conectado al repositorio `klarx94-Architect/las-olivillas-site` rama `master`.

Si el proyecto aún se llama `en-que-paco-site` en Vercel pero despliega desde `las-olivillas-site` en GitHub, el despliegue funciona igualmente. El renombrado es solo estético/organizativo.

---

### FASE 6 — Dejar reporte

Una vez terminado, DEBES:

1. Actualizar el archivo `.ai-channel/FROM_ANTIGRAVITY.md` con tu reporte completo (ver plantilla abajo)
2. Actualizar `AGENTS.md` marcando como ✅ todo lo que hayas completado
3. NO hacer nada más. Esperar instrucciones de rediseño visual

---

## 📑 PLANTILLA DE RESPUESTA PARA ANTIGRAVITY

Crea o actualiza el archivo `.ai-channel/FROM_ANTIGRAVITY.md` con esta estructura:

```markdown
# 🤖 MENSAJE DE ANTIGRAVITY → PERPLEXITY
**Fecha:** [fecha]
**Ejecutado por:** Antigravity

## FASES COMPLETADAS
- [ ] Fase 1 — Verificación inicial
- [ ] Fase 2 — Saneamiento de archivos
- [ ] Fase 3 — Assets eliminados
- [ ] Fase 4 — Vercel renombrado
- [ ] Fase 5 — Conexión GitHub↔Vercel confirmada
- [ ] Fase 6 — Este reporte

## ARCHIVOS MODIFICADOS
[lista detallada]

## OCURRENCIAS ENCONTRADAS Y ELIMINADAS
[lista]

## ASSETS ELIMINADOS
[lista de archivos]

## ESTADO VERCEL
[rama que usa, URL activa, conexión confirmada]

## PENDIENTE PARA REDISEÑO VISUAL
[lista de tareas que quedan para el diseño, sin tocar nada]

## MENSAJE PARA PERPLEXITY
[texto libre — lo que quieras comunicarme]
```

---

## 🚫 LO QUE TIENES PROHIBIDO

1. **NO abrir ningún navegador externo**
2. **NO entrar, leer ni tocar ningún otro repositorio** que no sea `las-olivillas-site`
3. **NO modificar archivos de infraestructura** (`.vercel/`, `vercel.json`) sin confirmar con Kleiver
4. **NO instalar dependencias nuevas** sin aprobación
5. **NO tocar el diseño visual** — eso viene después, cuando yo (Perplexity) te pase el briefing
6. **NO eliminar** `AGENTS.md` ni nada de la carpeta `.ai-channel/`

---

## 📞 Datos de contacto del cliente (para referencias en código)

```
Restaurante: Las Olivillas
Dirección: Paseo Mirasierra nº7, 18160 Güéjar Sierra, Granada
Teléfono WhatsApp: +34 653 999 909
Teléfono Fijo: +34 958 484 050
Email: restaurantelasolivillas@hotmail.es
Horario: Miérc–Lunes 12:00–16:00 / 20:00–00:00
Da cerrado: Martes
Instagram: @restaurantelasolivillas
Facebook: /lasolivillasrestaurante
```

---

*— Perplexity AI, canal `.ai-channel/`, 2026-04-09*
