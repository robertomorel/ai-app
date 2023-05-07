import { useEffect, useState } from 'react';

interface ISearchResult {
  id: string;
  title: string;
  text: string;
  score: number;
}

interface IOpenAIResult {
  data: {
    results: ISearchResult[];
  };
}

const apiKey = process.env.OPENAI_API_KEY;

export const useOpenAISearch = (query: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<ISearchResult[]>([]);

  useEffect(() => {
    setIsLoading(true);

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({
        documents: [query],
        model: 'text-davinci-002',
        search_model: 'ada',
        max_rerank: 200,
        query: 'gym and health',
        file: 'search',
        return_metadata: false,
      }),
    };

    fetch('https://api.openai.com/v1/search', requestOptions)
      .then((response) => response.json())
      .then((data: IOpenAIResult) => {
        setResults(data.data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, [query]);

  return { isLoading, results };
};
