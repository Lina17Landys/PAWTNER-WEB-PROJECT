import { useState } from 'react';
import { getResponseAI } from '../services/getResponseAI';

export const useChatGPT = () => {
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchRecommendation = async (symptoms: string) => {
    setLoading(true);
    setError(null);

    try {
      const recommendation = await getResponseAI(symptoms);
      setResponse(recommendation);
    } catch (err: any) {
      setError(err.message || 'Error fetching recommendation from OpenAI');
    } finally {
      setLoading(false);
    }
  };

  return { fetchRecommendation, response, loading, error };
};
