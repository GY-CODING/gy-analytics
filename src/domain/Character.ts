export interface Character {
    identifier: string;
    name: string;
    description: string;
    title: string;
    world: string;
    image: string;
    inGame: boolean;
    race: string;
    stats: {
      physicalDamage: number;
      magicalDamage: number;
      physicalArmor: number;
      magicalArmor: number;
      movementSpeed: number;
      attackSpeed: number;
      criticalStrike: number;
      criticalStrikeProbability: number;
      health: number;
      ether: number;
    };
    abilities: Array<{
        identifier: string;
        name: string;
        description: string;
        timeToHit: number;
        cooldown: number;
        life: number;
        damage: number;
    }>;
    stories: Array<{
      identifier: string;
      title: string;
      text: string;
    }>;
  }
  