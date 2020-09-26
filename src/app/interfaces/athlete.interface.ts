export interface Athlete {
  name: string;
  surname: string;
  age: number;
  password: string;
  address: {
    town: string;
    street: string;
    postalCode: string;
  }
  email: string;
  phoneNumber: string;
  isContactAvailable: boolean;
  isActive: boolean;
  favouriteSportDiscipline: string;
}
