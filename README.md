🦉 CORVUS — MexiLeaks

CORVUS — MexiLeaks es un medio de periodismo de investigación independiente, anónimo y distribuido.
Su objetivo es recibir, verificar y publicar filtraciones sobre corrupción, desapariciones, ciberseguridad, fraudes y delitos de alto impacto, de forma imposible de silenciar.

⸻

✊ Objetivo
	•	Exponer hechos de interés público con evidencias verificables.
	•	Garantizar la protección y el anonimato de las fuentes.
	•	Mantener una red replicable y resiliente: sin bases de datos, sin backend, 100% estática.

⸻

🗂️ Estructura del proyecto

/index.html               --> Portada: muestra la última noticia de forma automática.
/guia.html                --> Guía OPSEC: pasos para filtrar información de forma segura.
/contacto.html            --> Contacto: ProtonMail, clave pública PGP y Signal.
/mirrors.html             --> Lista de mirrors y hidden services.
/noticias/                --> Contiene todos los casos y reportajes.
/noticias/noticias.json   --> Lista de noticias (usada para mostrar la más reciente).
/assets/pgp-key.asc       --> Clave pública PGP.


⸻

📣 Cómo recibir y subir filtraciones

1️⃣ Recibir la filtración
	•	Usar Tor Browser o Tails OS.
	•	Crear ProtonMail anónimo.
	•	Cifrar todo con la clave pública PGP.
	•	Alternativamente, enviar vía Signal (opcional).

Consulta guia.html para pasos detallados.

2️⃣ Verificar y organizar
	•	Verificar la autenticidad de los documentos.
	•	Limpiar todos los metadatos.
	•	Generar hash.txt con SHA-256 para cada evidencia.

3️⃣ Publicar
	•	Crear una nueva carpeta /noticias/{año}/caso-XXX/ con:
	•	index.html del caso/reportaje.
	•	Carpeta evidencias/ con documentos.
	•	Carpeta torrents/ (opcional).
	•	Archivo hash.txt con verificación.
	•	Agregar la nueva entrada en /noticias/noticias.json:

{
  "id": 2,
  "titulo": "Caso 002 — Título del reportaje",
  "ruta": "./noticias/2025/caso-002/index.html",
  "fecha": "YYYY-MM-DD"
}

	•	Subir los cambios a la rama main.

El archivo index.html detecta automáticamente la última noticia publicada a partir de noticias.json.

⸻

🔐 Guía OPSEC

Consulta guia.html para enviar información de forma segura.

Incluye:
	•	Recomendaciones de Tor/Tails.
	•	Uso de ProtonMail cifrado con PGP.
	•	Limpieza de metadatos.
	•	Contacto por Signal como opción adicional (botón flotante visible en la guía).

⸻

🗝️ Clave pública

La clave PGP se encuentra en assets/pgp-key.asc.
Siempre cifra todo antes de enviar.

⸻

🦉 CORVUS — MexiLeaks

Filtración anónima. Evidencia verificada. Periodismo imposible de silenciar.

⸻

