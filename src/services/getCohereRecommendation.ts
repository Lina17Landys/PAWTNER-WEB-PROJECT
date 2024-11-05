export const fetchRecommendation = async (symptoms: string) => {
    try {
      const response = await fetch('https://api.cohere.com/v1/chat', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer 6WpxnqJnM8E2STBAC1OkSlGQCYcQQ4JUYi2sIIMi',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'command-r-08-2024',
          message: `Mi mascota presenta los siguientes síntomas: ${symptoms}. ¿Qué cuidados y medicamentos recomiendas?`,
          temperature: 0.3,
          stream: false,
          chat_history: [
            {
              role: 'User',
              message: 'Eres una IA diseñada para ofrecer recomendaciones de cuidado y tratamiento médico para una aplicación de salud de mascotas.',
            },
          ],
          prompt_truncation: 'OFF',
        }),
      });
  
      const data = await response.json();
      console.log("Cohere API Response:", data);
  
      if (!response.ok) throw new Error(data.message || 'Error fetching recommendation from Cohere');
  
      return data;
    } catch (error) {
      console.error('Error fetching recommendation from Cohere:', error);
      throw error;
    }
  };
  