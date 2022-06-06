declare module 'rollcall';

type FirstName = string;
type LastName = string;

export interface Name {
  firstName: FirstName,
  lastName: LastName,
}

export interface NameCount {
  [key: FirstName]: number
}
