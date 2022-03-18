type RequiredKeys<T> = keyof {
  [P in keyof T as Omit<T, P> extends T ? never : P]: T[P];
};

type IsUnion<A, B = A> = A extends A ? ([B] extends [A] ? false : true) : false;

type HasRequired<T> = IsUnion<RequiredKeys<T> | ''>;
