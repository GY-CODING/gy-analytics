import { Character } from "@/domain/Character";
import { charactersFromDto } from "@/mappers/character.mapper";

export async function getCharactersStory(): Promise<Character[]> {
  const response = await fetch('/api/characters/story', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error('Error fetching characters');
  }
  const characters: Character[] = [];
  data.data.forEach((character: any) => {
    characters.push(charactersFromDto(character));
  });

  return characters;
}

export async function getCharactersGame(): Promise<Character[]> {
  const response = await fetch('/api/characters/game', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error('Error fetching characters');
  }
  const characters: Character[] = [];
  data.data.forEach((character: any) => {
    characters.push(charactersFromDto(character));
  });

  return characters;
}