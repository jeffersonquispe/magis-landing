import { db } from '@vercel/postgres';

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method Not Allowed' });
  }

  const { firstName, email, interest, whatsapp, data_auth } = request.body;

  if (!firstName || !email || !interest || !whatsapp) {
    return response.status(400).json({ error: 'Faltan campos obligatorios' });
  }

  try {
    // Nota: Esto requiere que Vercel Postgres esté configurado en el dashboard del proyecto.
    await db.sql`
      CREATE TABLE IF NOT EXISTS leads (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        whatsapp VARCHAR(50),
        interest VARCHAR(255),
        data_auth BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    // Insertamos el lead
    await db.sql`
      INSERT INTO leads (name, email, whatsapp, interest, data_auth)
      VALUES (${firstName}, ${email}, ${whatsapp}, ${interest}, ${data_auth === 'on' || data_auth === true});
    `;

    return response.status(200).json({ message: 'Registro exitoso' });
  } catch (error) {
    console.error('Error al registrar lead:', error);

    // Fallback: Si no hay base de datos configurada aún, devolvemos un éxito simulado para desarrollo
    if (error.message.includes('POSTGRES_URL')) {
      return response.status(200).json({
        message: 'Simulación de éxito (Falta configurar POSTGRES_URL en Vercel)',
        data: { firstName, email, interest, whatsapp, data_auth }
      });
    }

    return response.status(500).json({ error: 'Error interno del servidor' });
  }
}
