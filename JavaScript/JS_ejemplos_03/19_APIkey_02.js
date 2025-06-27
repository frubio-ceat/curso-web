const API_KEY = "tu_clave_secreta_de_openai";

async function preguntarAChatGPT(prompt) {
  try {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4", // o "gpt-3.5-turbo"
        messages: [
          { role: "user", content: prompt }
        ],
        temperature: 0.7
      })
    });

    const data = await res.json();
    const respuesta = data.choices[0].message.content;
    console.log("Respuesta de ChatGPT:", respuesta);
  } catch (error) {
    console.error("Error al usar la API de OpenAI:", error);
  }
}

// Uso:
preguntarAChatGPT("¿Cuál es la capital de Japón?");
