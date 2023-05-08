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
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'user',
            content: query,
          },
        ],
      }),
    };

    fetch('https://api.openai.com/v1/chat/completions', requestOptions)
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
