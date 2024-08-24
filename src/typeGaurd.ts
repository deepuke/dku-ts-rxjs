// Bad approach
type Entity = Person | Company;

export interface Person {
  type: 'person';
  name: string;
  age: number;
}

export interface Company {
  type: 'company';
  name: string;
  numberOfEmployees: number;
}

// function isPerson(entity: Entity): boolean {
//   return entity.type === 'person';
// }

// Good approach using the new `is` keyword
export function isPerson(entity: Entity): entity is Person {
  return entity.type === 'person';
}
