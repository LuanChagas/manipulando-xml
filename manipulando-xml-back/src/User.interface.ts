export interface IUser {
  Name: string;
  Age: number;
  DateOfBirth: Date;
  FrontEnd: string;
  BackEnd: string;
  DataFormats: string;
}

export interface IUserParser {
  User: IUser;
}
