# responsive-grid-lab-week-04

Laboratorio individual de la Semana 4 — Desarrollo de Software 4.

## Descripción

Página web responsiva construida con CSS Grid que presenta 4 contenedores
(imagen + bloque de texto) y se adapta a escritorio, tableta y móvil.

## Tecnologías

- HTML5
- CSS3 (CSS Grid)
- JavaScript (pruebas de comportamiento)
- Vite (build y servidor de desarrollo)
- Playwright (pruebas de maquetación automatizadas)

## Estructura del proyecto

```
responsive-grid-lab-week-04/
├── src/                  # Código fuente (HTML, CSS, JS)
├── assets/               # Imágenes y recursos estáticos
├── tests/                # Pruebas automatizadas (Playwright)
├── docs/                 # Capturas y documentación de entrega
├── .github/workflows/    # GitHub Actions
├── .gitlab-ci.yml        # GitLab CI/CD
├── Makefile              # Automatización de tareas
└── package.json          # Dependencias y scripts
```

## Scripts disponibles

| Comando              | Descripción                                      |
| -------------------- | ------------------------------------------------ |
| `make install`       | Instala dependencias con pnpm                    |
| `make dev`           | Inicia el servidor de desarrollo Vite            |
| `make build`         | Genera el bundle de producción en `dist/`        |
| `make preview`       | Previsualiza el bundle de producción localmente  |
| `make lint`          | Ejecuta ESLint                                   |
| `make format`        | Formatea con Prettier                            |
| `make format-check`  | Verifica el formato sin modificar archivos       |
| `make test`          | Ejecuta las pruebas de Playwright                |
| `make clean`         | Elimina artefactos de build y reportes           |

## Repositorios

- [GitLab](https://gitlab.com/jala-university1/cohort-5/ES.CSSD-245.GA.T2.26.M2/SD/group-b/individual-laboratories/alejandro-botina/week-04/responsive-grid-lab-week-04) (principal)
- [GitHub](https://github.com/JalaU-Labs/responsive-grid-lab-week-04) (espejo)