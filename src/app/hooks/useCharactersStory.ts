/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { Character } from '@/domain/Character';
import { getCharactersStory } from '@/services/Characters';
import useSWR from 'swr';

interface useCharactersType {
  data: Character[];
  isError: any;
  isLoading: boolean;
  countCharactersByWorld: () => Record<string, number>;
}

export function useCharactersStory(): useCharactersType {
  const {
    data: characters,
    error: isError,
    isLoading,
  } = useSWR<Character[]>('/api/characters/story', getCharactersStory);

  function countCharactersByWorld() {
    const worldCountMap: Record<string, number> = {};

    characters?.forEach((character) => {
      let { world } = character;

      world = world.charAt(0).toUpperCase() + world.slice(1)

      if (worldCountMap[world]) {
        worldCountMap[world] += 1;
      } else {
        worldCountMap[world] = 1;
      }
    });

    return worldCountMap;
  }

  return {
    data: characters!,
    isError,
    isLoading,
    countCharactersByWorld
  };
}
