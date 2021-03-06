/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

class GameObject {
  constructor(attrs) {
    this.createdAt = attrs.createdAt;
    this.name = attrs.name;
    this.dimensions = attrs.dimensions;
  }
  destroy() {
    return `${this.name} was removed from the game...`;
  }
}

/*
    === CharacterStats ===
    * healthPoints
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */

class CharacterStats extends GameObject {
  constructor(charAttrs) {
    super(charAttrs);
    this.healthPoints = charAttrs.healthPoints;
  }
  takeDamage() {
    return `Ouch! ${this.name} took damage!`;
  }
}

/*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */

class Humanoid extends CharacterStats {
  constructor(humanoidAttrs) {
    super(humanoidAttrs);
    this.team = humanoidAttrs.team;
    this.weapons = humanoidAttrs.weapons;
    this.language = humanoidAttrs.language;
  }
  greet() {
    return `${this.name} offers a greeting in ${this.language}.`;
  }
}

/*
 * Inheritance chain: GameObject -> CharacterStats -> Humanoid
 * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
 * Instances of CharacterStats should have all of the same properties as GameObject.
 */

// Test you work by un-commenting these 3 objects and the list of console logs below:

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  healthPoints: 5,
  name: "Bruce",
  team: "Mage Guild",
  weapons: ["Staff of Shamalama"],
  language: "Common Tongue"
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  healthPoints: 15,
  name: "Sir Mustachio",
  team: "The Round Table",
  weapons: ["Giant Sword", "Shield"],
  language: "Common Tongue"
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 10,
  name: "Lilith",
  team: "Forest Kingdom",
  weapons: ["Bow", "Dagger"],
  language: "Elvish"
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

// Stretch task:
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.

class Villain extends Humanoid {}

class Hero extends Humanoid {}

// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;

Humanoid.prototype.attack = function(opponent) {
  let randomInt = Math.floor(Math.random() * this.weapons.length);
  let damage = 2 * Math.floor(Math.random() * 3 + 1);
  opponent.healthPoints -= damage;

  console.log(`${this.name} attacks ${opponent.name}!`);
  console.log(`He hits him with his ${this.weapons[randomInt]}!`);
  console.log(opponent.takeDamage());
  console.log(
    `${opponent.name}'s health is now at ${opponent.healthPoints}...`
  );

  if (opponent.healthPoints <= 0) {
    console.log(`${opponent.name} has been defeated!`);
    console.log(opponent.destroy());
    console.log(`${this.name.toUpperCase()} IS VICTORIOUS!!`);
  }
};

// * Create two new objects, one a villain and one a hero and fight it out with methods!
const johnWick = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 3
  },
  healthPoints: 10,
  name: "John Wick",
  team: "Excommunicado",
  weapons: [
    "Right Fist",
    "Left Fist",
    "Right Foot",
    "Left Foot",
    "Library Book"
  ],
  language: "Belarusian"
});

const boban = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 5
  },
  healthPoints: 10,
  name: "Boban",
  team: "The High Table",
  weapons: ["Right Fist", "Left Fist"],
  language: "Serbian"
});

const runGame = (hero, villain, location) => {
  console.log(
    `OUR HERO ${hero.name.toUpperCase()} IS ${location.toUpperCase()} AND WHO SHOULD HE SEE...`
  );

  console.log(villain.greet());
  console.log(hero.greet());

  while (hero.healthPoints > 0 && villain.healthPoints > 0) {
    let randomInt = Math.floor(Math.random() * 2);
    randomInt === 1 ? hero.attack(villain) : villain.attack(hero);
  }
};

// runGame(johnWick, boban, "in the New York Public Library");

const jonSnow = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 3
  },
  healthPoints: 10,
  name: "Jon Snow",
  team: "House Stark",
  weapons: [
    "Right Fist",
    "Left Fist",
    "Valyrian steel sword Longclaw",
    "dragon flame"
  ],
  language: "English"
});

const nightKing = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 5
  },
  healthPoints: Infinity,
  name: "The Night King",
  team: "The White Walkers",
  weapons: ["horde of ice zombies", "ice spear"],
  language: "silence"
});

//   runGame(jonSnow, nightKing, "at the top of the Wall");
