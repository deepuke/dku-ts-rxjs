# TS & RxJS

## Advanced Type

```typescript
//Make all the properties in the interface readonly
type ReadonlyProps<T> = {
  readonly [P in keyof T]: T[P];
};

interface Props {
  title: string;
  content: string;
}

type ReadonlyComponentProps = ReadonlyProps<Props>;
```

## Discriminated Union

```typescript
export type BadShape = {
  kind: string;
  radius?: number;
  width?: number;
  height?: number;
  size?: number;
};

export type goodShape =
  | { kind: 'circle'; radius: number }
  | { kind: 'rectangle'; width: number; height: number }
  | { kind: 'square'; size: number };
```

## Type Guard

```typescript
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

// Good approach using the new `is` keyword
export function isPerson(entity: Entity): entity is Person {
  return entity.type === 'person';
}
```

## Utility Type

```typescript
Omit<Person, 'email'>;
```

### Custom type nullable

```typescript
type Nullable<T> = { [K in keyof T]: T[K] : null }
```

## TODO alias `'any'`

```typescript
type TODO = any;
```
