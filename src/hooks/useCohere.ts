import { useState } from 'react';
import { fetchRecommendation } from '../services/getCohereRecommendation';

export const useCohere = () => {
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const getRecommendation = async (symptoms: string) => {
    setLoading(true);
    setError(null);

    try {
      const recommendationData = await fetchRecommendation(symptoms);
      setResponse(recommendationData.text);
      return recommendationData.text;
    } catch (err: any) {
      setError(err.message || 'Error fetching recommendation from Cohere');
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { getRecommendation, response, loading, error };
};
