export type TPrefix<Type, Prefix extends string> = {
  [Property in keyof Type as `${Prefix}${string & Property}`]: Type[Property];
};
