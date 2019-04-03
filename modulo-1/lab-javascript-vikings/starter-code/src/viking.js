// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return `Odin Owns You All!`
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return 'A Saxon has died in combat';
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    let saxonRandom = Math.floor(Math.random() * (this.saxonArmy.length - 1));
    let vikingRandom = Math.floor(Math.random() * (this.vikingArmy.length - 1));
    const message = this.saxonArmy[saxonRandom].receiveDamage(this.vikingArmy[vikingRandom].attack());
    if (this.saxonArmy[saxonRandom].health <= 0) {
      this.saxonArmy.splice(saxonRandom, 1);
    }
    return message;
  }

  saxonAttack() {
    let saxonRandom = Math.floor(Math.random() * (this.saxonArmy.length - 1));
    let vikingRandom = Math.floor(Math.random() * (this.vikingArmy.length - 1));
    const message = this.vikingArmy[vikingRandom].receiveDamage(this.saxonArmy[saxonRandom].attack());
    if (this.vikingArmy[vikingRandom].health <= 0) {
      this.vikingArmy.splice(vikingRandom, 1);
    }
    return message;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!';
    }
    if (this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survive another day...'
    }
    return 'Vikings and Saxons are still in the thick of battle.'
  }
}

const worldWar = new War;

const Conan = new Viking('Conan', 50, 20);
const SaxonWarrior = new Saxon(20, 10);

worldWar.addViking(Conan);
worldWar.addSaxon(SaxonWarrior);

console.log(worldWar.saxonAttack());
console.log(worldWar.showStatus());

console.log(worldWar.vikingAttack());
console.log(worldWar.showStatus());
