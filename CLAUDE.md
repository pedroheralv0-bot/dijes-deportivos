# CLAUDE.md — Dijes Deportivos

## Descripción del Proyecto

Sitio web estático para "Dijes Deportivos", publicado via GitHub Pages.

- **URL del sitio**: https://pedroheralv0-bot.github.io/dijes-deportivos/
- **Repositorio**: `pedroheralv0-bot/dijes-deportivos`
- **Deploy**: Automático al hacer push a `main` — GitHub Pages se actualiza en 1-2 minutos.

## Estructura del Proyecto

```
dijes-deportivos/
├── index.html       # Página principal (incluye diagrama Ishikawa)
├── producto.html    # Página del producto (certificados, ficha técnica)
├── about.html       # Página "Acerca de"
├── layout.html      # Layout/plantilla base
├── glosario.html    # Glosario de términos
└── assets/          # Imágenes y recursos estáticos
    ├── logo.png
    ├── cert-a001.png … cert-a008.png  # Certificados
    ├── ficha-champ.png                # Ficha técnica del dije
    └── ishikawa-2.png                 # Diagrama causa-efecto
```

## Workflow de Deploy

1. Editar archivos HTML o agregar assets en `/assets/`
2. Hacer commit y push a `main`
3. GitHub Pages actualiza el sitio automáticamente en ~1-2 minutos

No hay build step, bundler, ni servidor backend — todo es HTML/CSS/JS estático.

---

## Workflow Orchestration

1. **Plan Mode Default** — Para cualquier tarea no trivial (3+ pasos), usar plan mode primero. Si algo sale mal durante la implementación, replantear desde plan mode.

2. **Subagent Strategy** — Usar subagentes para mantener el contexto limpio y paralelizar análisis independientes. No saturar el contexto principal con operaciones de exploración.

3. **Self-Improvement Loop** — Después de cada corrección del usuario, actualizar `tasks/lessons.md` con el patrón aprendido para no repetir el mismo error.

4. **Verification Before Done** — Nunca marcar una tarea como completa sin verificar que funciona. Para este proyecto: revisar que los cambios en HTML se ven correctos y que los assets existen en `/assets/` antes de hacer push.

5. **Demand Elegance** — Para cambios no triviales, preguntarse: "¿Hay una forma más simple de hacer esto?" antes de implementar.

6. **Autonomous Bug Fixing** — Encontrar y corregir la causa raíz de los bugs sin pedir explicaciones innecesarias. Evitar soluciones temporales (workarounds).

## Task Management

1. **Plan First** — Escribir el plan en `tasks/todo.md` con ítems checkeables antes de implementar.
2. **Verify Plan** — Revisar el plan antes de empezar.
3. **Track Progress** — Marcar ítems como completados conforme avanzas.
4. **Explain Changes** — Resumen de alto nivel en cada paso significativo.
5. **Document Results** — Agregar sección de revisión a `tasks/todo.md` al terminar.
6. **Capture Lessons** — Actualizar `tasks/lessons.md` después de correcciones del usuario.

## Core Principles

- **Simplicity First** — Hacer cada cambio lo más simple posible. Impacto mínimo en el código existente.
- **No Laziness** — Encontrar causas raíz. Sin soluciones temporales. Estándares de senior developer.
- **Minimal Impact** — Los cambios solo deben tocar lo estrictamente necesario. Evitar introducir bugs al arreglar otros.
