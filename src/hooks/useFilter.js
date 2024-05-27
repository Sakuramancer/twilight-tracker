import { useState } from "react";

const defFilters = {
  phases: { status: true, action: true, agenda: true },
  stages: { stage1: true, stage2: true, secret: true },
  expansions: { main: true, pok: true, omega: true },
};

export const useFilter = () => {
  const [filters, setFilters] = useState(defFilters);

  const handlers = {
    phases: (value) => {
      setFilters(
        (filters) => ({
          ...filters,
          phases: {
            ...filters.phases,
            [value]: !filters.phases[value],
          },
        }),
        []
      );
    },
    stages: (value) => {
      setFilters(
        (filters) => ({
          ...filters,
          stages: {
            ...filters.stages,
            [value]: !filters.stages[value],
          },
        }),
        []
      );
    },
    expansions: (value) => {
      setFilters(
        (filters) => ({
          ...filters,
          expansions: {
            ...filters.expansions,
            [value]: !filters.expansions[value],
          },
        }),
        []
      );
    },
  };
  return [filters, handlers];
};
