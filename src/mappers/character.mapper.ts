import { Character } from "@/domain/Character";


export const charactersFromDto = (obj: any): Character => {
  const character: Character = {
    identifier: obj.identifier,
    name: obj.name,
    description: obj.description,
    title: obj.title,
    world: obj.world,
    image: obj.image,
    inGame: true,
    race: obj.race,
    stats: {
        physicalDamage: obj.stats.physicalDamage,
        magicalDamage: obj.stats.magicalDamage,
        physicalArmor: obj.stats.physicalArmor,
        magicalArmor: obj.stats.magicalArmor,
        movementSpeed: obj.stats.movementSpeed,
        attackSpeed: obj.stats.attackSpeed,
        criticalStrike: obj.stats.criticalStrike,
        criticalStrikeProbability: obj.stats.criticalStrikeProbability,
        health: obj.stats.health,
        ether: obj.stats.ether,
    },
    abilities: obj.abilities.map((ability: any) => ({
        identifier: ability.identifier,
        name: ability.name,
        description: ability.description,
        timeToHit: ability.timetoHit,
        cooldown: ability.cooldown,
        life: ability.life,
        damage: ability.damage
        })),

    stories: obj.stories.map((story: any) => ({
      identifier: story.identifier,
      title: story.title,
      text: story.text,
    })),
  };
  return character;
};
