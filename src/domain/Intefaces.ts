import { Character } from "./Character";

export interface CircleComponentProps {
  title: string;
  colors: string[];
  dataset: Record<string, number>;
  isLoading?: boolean;
}

export interface BarComponentLinesProps {
  title: string;
  colors: string[];
  datasetA: Record<string, number>;
  datasetB?: Record<string, number>;
  dataKey: string[];
}

export interface BarComponentBarsProps {
  title: string;
  colors: string[];
  datasetA: Record<string, number>;
  datasetB?: Record<string, number>;
  dataKey: string[];
}

export interface useCharactersType {
  data: Character[];
  isError: any;
  isLoading: boolean;
  countCharactersByWorld: () => Record<string, number>;
}

export interface useCharactersType {
  data: Character[];
  isError: any;
  isLoading: boolean;
  countCharactersByWorld: () => Record<string, number>;
}
