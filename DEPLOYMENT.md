# Guía de Despliegue: Magis AI Academy en Vercel 🚀

Esta guía te llevará paso a paso desde tu carpeta local hasta tener el sitio en vivo con una base de datos funcionando.

## Requisitos Previos
1. Una cuenta en [Vercel](https://vercel.com).
2. Una cuenta en [GitHub](https://github.com) (o GitLab/Bitbucket).
3. Tener instalado [Git](https://git-scm.com/) en tu computadora.

---

## Paso 1: Subir el Código a GitHub
Vercel funciona mejor cuando está conectado a un repositorio de Git para despliegues automáticos.

1. Abre una terminal en la carpeta `Fast Mode`.
2. Inicializa el repositorio y sube los archivos:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Magis AI Academy"
   ```
3. Crea un nuevo repositorio en GitHub (ej. `magis-landing`).
4. Sigue las instrucciones de GitHub para vincular tu repositorio local y hacer el `push`:
   ```bash
   git remote add origin https://github.com/TU_USUARIO/magis-landing.git
   git branch -M main
   git push -u origin main
   ```

---

## Paso 2: Importar el Proyecto en Vercel
1. Ve a tu [Vercel Dashboard](https://vercel.com/dashboard).
2. Haz clic en **"Add New..."** → **"Project"**.
3. Selecciona el repositorio `magis-landing` que acabas de subir.
4. En **"Project Settings"**, Vercel debería detectar automáticamente que es un sitio estático con una carpeta `/api`.
5. Haz clic en **"Deploy"**.

> [!NOTE]
> En este punto, el frontend cargará, pero el formulario de registro dará error porque falta la base de datos.

---

## Paso 3: Configurar Vercel Postgres
Para que el registro funcione, necesitamos crear y vincular la base de datos.

1. En el dashboard de tu proyecto recién creado en Vercel, ve a la pestaña **"Storage"**.
2. Haz clic en **"Create Database"** y selecciona **"Postgres"**.
3. Elige un nombre (ej. `magis-db`) y una región cercana a tus usuarios.
4. Una vez creada, ve a la sección **"Connected Project"** y haz clic en **"Connect"**.
5. Vercel te preguntará si quieres inyectar las variables de entorno (`POSTGRES_URL`, etc.). Confirma que sí.

---

## Paso 4: Redesplegar para activar la Base de Datos
Las variables de entorno solo se activan en un despliegue nuevo.

1. Ve a la pestaña **"Deployments"**.
2. Selecciona el despliegue más reciente (o haz clic en los tres puntos `...`).
3. Elige **"Redeploy"**.

---

## Paso 5: Verificación Final
1. Abre la URL que te dio Vercel (ej. `magis-academy-abc.vercel.app`).
2. Ve a la sección de registro.
3. Completa el formulario con datos de prueba (incluyendo el nuevo campo de WhatsApp).
4. Haz clic en **"Reservar Mi Lugar Ahora"**.
5. Si ves el mensaje **"¡Inscripción Exitosa!"**, ¡felicidades! Tu base de datos y tu API están funcionando.

---

## Paso 6: Configurar tu Propio Dominio (`magis-io.ai`)
Si ya tienes un dominio principal y quieres usarlo para esta landing page, tienes dos opciones principales:

### Opción A: Usar un Subdominio (Recomendado)
Es la forma más limpia y sencilla. Ejemplo: `academy.magis-io.ai`.

1. En el dashboard de tu proyecto en Vercel, ve a **Settings** → **Domains**.
2. Haz clic en **"Add"**.
3. Escribe el subdominio que desees, por ejemplo: `academy.magis-io.ai`.
4. Vercel te dará unos registros DNS (tipo **CNAME**).
5. Ve al panel de control de tu dominio (Cloudflare, GoDaddy, etc.) y agrega ese registro CNAME:
   - **Name**: `academy`
   - **Value**: `cname.vercel-dns.com`
6. Una vez que los DNS se propaguen (puede tomar unos minutos), tu landing page estará disponible en ese subdominio.

### Opción B: Usar una Subruta (Más avanzado)
Si quieres que sea `magis-io.ai/academy`, el proceso depende de dónde esté alojada tu página principal:

- **Si tu sitio principal también está en Vercel**: Puedes usar "Rewrites" en el archivo `vercel.json` de tu proyecto principal para redirigir `/academy` a la URL de la landing page.
- **Si tu sitio principal está en otro hosting**: Deberás configurar un "Reverse Proxy" (en Nginx o Apache) para que las peticiones a `/academy` apunten a la URL de Vercel.

---

## 🛠️ Solución de Problemas (FAQ)

> [!IMPORTANT]
> **Error "Internal Server Error" en el registro:**
> Asegúrate de que hiciste el "Connect" en la pestaña de Storage y que realizaste un "Redeploy". Sin las variables de entorno `POSTGRES_URL`, la función no puede comunicarse con la base de datos.

> [!TIP]
> **Ver los datos registrados:**
> Puedes ver los leads registrados yendo a la pestaña **"Storage"** → selecciona tu BD → **"Data Explorer"**. Ahí puedes ejecutar `SELECT * FROM leads;` para ver todos tus registros.

---

© 2026 Magis AI Academy — Éxito en tu lanzamiento.
