class Key {
  private signature: number = Math.random();

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private keySignature: number) {}

  getKeySignature(): number {
    return this.keySignature;
  }
}

abstract class House {
  protected door: boolean = false;
  protected key: Key;
  protected tenants: Person[] = [];

  constructor(key: Key) {
    this.key = key;
  }

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log("The door is open");
    } else {
      console.log("The door is closed");
    }
  }
}

class MyHouse extends House {
  openDoor(person: Person): void {
    if (this.key.getSignature() === person.getKeySignature()) {
      this.door = true;
      console.log("The door is open");
    } else {
      console.log("The door is closed");
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key.getSignature());

house.openDoor(person);

house.comeIn(person);

export {};
