class Dog {
  constructor(readonly name: string) { }

  sayHello(): string {
    return 'Hello, WOF WOF WOF!';
  }
}

class Fish {
  constructor(readonly name: string) { }

  dive(howDeep: number): string {
    return `${this.name} is diving ${howDeep} feet`;
  }
}

type Pet = Dog | Fish;

const myDog = new Dog('Frank');
const myFish = new Fish('Flounder');

function talkToPet(pet: Pet): string | void {
  if (pet instanceof Dog) {
    return pet.sayHello();

  } else if (pet instanceof Fish) {
    return 'Fish cannot talk, sorry';
  }
}

console.log(talkToPet(myDog));
console.log(talkToPet(myFish));
// console.log(talkToPet({name: 'John'}))