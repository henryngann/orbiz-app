"use client";
import { useState, useEffect } from "react";
import mockData from "@/mocks/games.json";
import { Game } from "@/types/game";

export const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        setLoading(true);
        //Functional Requirement was to show a loading state randomly for 1-2 seconds to simulate network delay.
        await new Promise((resolve) =>
          setTimeout(resolve, Math.random() < 0.5 ? 1000 : 2000)
        );
        setGames(mockData);
        setError(null);
      } catch (err) {
        setError("Yikes! Something went wrong while fetching games.");
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  return { games, loading, error };
};
