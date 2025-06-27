const API_KEY = "TU_API_KEY_AQUI"; // reemplázalo por tu clave real

async function traducirTexto(texto, destino = "es") {
  const url = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`;
  
  const cuerpo = {
    q: texto,
    target: destino,
    format: "text"
  };

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(cuerpo)
    });

    const data = await res.json();

    if (res.ok && data.data && data.data.translations) {
      console.log("Traducción:", data.data.translations[0].translatedText);
    } else {
      console.error("Respuesta inesperada:", data);
    }

  } catch (error) {
    console.error("Error al traducir:", error);
  }
}

// Ejemplo de uso:
traducirTexto("Hello, how are you?", "fr");
