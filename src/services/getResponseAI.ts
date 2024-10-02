import { OPENAI_API_KEY } from './apikey';

export const getResponseAI = async (symptoms: string) => {
  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are an expert veterinarian who makes animal care and medication recommendations based on symptoms.',
        },
        {
          role: 'user',
          content: `Given these symptoms: ${symptoms}, what medication or care should be given to the pet?`,
        },
      ],
    }),
  });

  const data = await res.json();

  console.log('OpenAI Response:', data);

  if (!res.ok) {
    throw new Error(data.error?.message || 'Error fetching recommendation from OpenAI');
  }

  if (data.choices && data.choices[0]?.message?.content) {
    return data.choices[0].message.content;
  } else {
    throw new Error('No recommendation available');
  }
};
