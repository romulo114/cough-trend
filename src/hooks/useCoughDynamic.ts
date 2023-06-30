import { useCallback, useState } from "react";
import { getAverageCoughsFromArray } from "utils/CoughDynamicUtils";

export function useCoughDynamic() {
  const [coughDynamic, setCoughDynamic] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const refresh = useCallback(() => {
    const now = new Date();
    const yesterday = new Date(now.valueOf() - 1 * 24 * 60 * 60 * 1000);
    const lastWeek = new Date(yesterday.valueOf() - 7 * 24 * 60 * 60 * 1000);

    setIsLoading(true);
    Promise.all([
      fetch(
        `https://us-central1-hyfe-coughwatch.cloudfunctions.net/dummy_cough_events?aggregation=hour&from=${yesterday.toISOString()}&to=${now.toISOString()}`
      )
        .then((response) => response.json())
        .then((result) => getAverageCoughsFromArray(result)),
      fetch(
        `https://us-central1-hyfe-coughwatch.cloudfunctions.net/dummy_cough_events?aggregation=day&from=${lastWeek.toISOString()}&to=${yesterday.toISOString()}`
      )
        .then((response) => response.json())
        .then((result) => getAverageCoughsFromArray(result)),
    ]).then(([lastDay, lastWeek]) => {
      setIsLoading(false);
      setCoughDynamic((lastDay - lastWeek) / lastWeek);
    });
  }, []);

  return { coughDynamic, isLoading, refresh };
}
