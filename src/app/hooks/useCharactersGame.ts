import { Character } from '@/domain/Character';
import { useCharactersType } from '@/domain/Intefaces';
import { getCharactersGame } from '@/services/Characters';
import useSWR from 'swr';

export function useCharactersGame(): useCharactersType {
  const {
    data: characters,
    error: isError,
    isLoading,
  } = useSWR<Character[]>('/api/characters/game', getCharactersGame);

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
