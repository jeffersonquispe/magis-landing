# ⚡ AI.Mastery — Landing Page v3

Una landing page moderna y de alto rendimiento para una plataforma de talleres intensivos de Inteligencia Artificial. Diseñada para ser desplegada en **Vercel** con almacenamiento de datos nativo.

---

## 🚀 Despliegue en Vercel

### Paso 1: Inicialización
Sube esta carpeta a un repositorio de GitHub y conéctalo a un nuevo proyecto en Vercel.

### Paso 2: Base de Datos (Vercel Postgres)
1. En el dashboard de Vercel, ve a la pestaña **Storage**.
2. Selecciona **Create Database** y elige **Postgres**.
3. Conéctalo a tu proyecto de la landing page.
4. Vercel inyectará automáticamente las variables de entorno necesarias (`POSTGRES_URL`, etc.).

### Paso 3: Dominio Personalizado
1. Ve a **Settings > Domains**.
2. Agrega `landing.magis-io.ai`.
3. Sigue las instrucciones de configuración de DNS en tu proveedor (Cloudflare/Godaddy).

---

## ✨ Secciones

| Sección | Descripción |
|---|---|
| **Hero** | Titular principal con el año 2026 y CTAs de conversión rápida. |
| **Talleres** | **6 workshops** prácticos de 2 a 4 horas de duración cada uno. |
| **Registro** | Formulario conectado a una **Serverless Function** de Vercel. |
| **FAQ** | Acordeón con respuestas a dudas técnicas y logísticas. |

---

## 🏗️ Estructura del Proyecto

```
Fast Mode/
├── api/
│   └── register.js      # Serverless Function (POST → Vercel Postgres)
├── index.html           # Landing page principal
├── vercel.json           # Configuración de Vercel
├── hero_ai_learning.png # Imagen principal
├── teacher_*.png        # Imágenes de los instructores (6 total)
└── README.md            # Documentación
```

---

## 🛠️ Stack Tecnológico

- **Frontend**: HTML5, Tailwind CSS (CDN), Lucide Icons.
- **Backend/Storage**: Vercel Serverless Functions (Node.js), Vercel Postgres.
- **Infraestructura**: Vercel (Hosting & DNS).

---

## ⚙️ Funcionalidad de Registro

El registro ahora es funcional:
1. El usuario completa el formulario.
2. El frontend hace un `fetch` a `/api/register`.
3. La función de Vercel:
   - Valida los datos.
   - Crea la tabla `leads` si no existe.
   - Inserta el registro en PostgreSQL.
   - Devuelve un JSON de confirmación.

---

## 📋 Talleres Disponibles

1. **Deep Learning Engineering** — 4 hrs
2. **LLM Fine-tuning & NLP** — 3 hrs
3. **AI Systems Architecture** — 4 hrs
4. **Agentes IA en Producción** — 3 hrs
5. **Claude Code para Developers** — 2 hrs
6. **Modelos Generativos y Fundacionales** — 3 hrs

---

## 📄 Licencia

© 2026 AI Mastery Inc. Todos los derechos reservados.
