export const arraysAreEqual = (
  array1: (string | number)[] | undefined,
  array2: (string | number)[] | undefined
) => JSON.stringify(array1?.sort()) === JSON.stringify(array2?.sort());

export const arrayOfKeysAreEqual = (object1: object, object2: object) =>
  arraysAreEqual(Object.keys(object1), Object.keys(object2));

export const sortByString = (a?: string, b?: string, reverse?: boolean) => {
  const titleA = `${a}`.toLowerCase();
  const titleB = `${b}`.toLowerCase();
  if (titleA < titleB) return reverse ? 1 : -1;
  if (titleA > titleB) return reverse ? -1 : 1;
  return 0;
};
