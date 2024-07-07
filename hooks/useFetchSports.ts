// In useFetchSports.ts
import { useState, useEffect, useCallback } from "react";
import { Sport } from "@/components/sportsTable";

export const useFetchSports = () => {
  const [sports, setSports] = useState<Sport[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<{
    message: string;
    error: string;
    statusCode: number;
  } | null>(null);

  const fetchSports = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch("http://localhost:8080/sport");
      if (!res.ok) {
        throw new Error("Failed to fetch sports");
      }
      const data: Sport[] = await res.json();
      if (data.length === 0) {
        setError({
          message: "Nenhuma atividade esportiva encontrada!",
          error: "Not Found",
          statusCode: 404,
        });
        setSports(null);
      } else {
        setSports(data);
      }
    } catch (error) {
      setError({
        message: "Failed to fetch sports",
        error: "Fetch Error",
        statusCode: 500,
      });
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSports();
  }, [fetchSports]);

  return { sports, isLoading, error, refetch: fetchSports };
};
