# Manipulando XML

Este repositório contém uma aplicação para manipulação de arquivos XML, permitindo a conversão para formatos CSV e JSON. Desenvolvida com [Nest js](https://github.com/nestjs) no back-end e [React](https://github.com/facebook/react) + [Vite](https://github.com/vitejs) no front-end.

### Rodando o Back end
Para rodar a aplicação rode o seguinte comando na na pasta raiz do arquivo baixado.
```bash
cd manipulando-xml-back
npm install
npm run start:dev
```

### Rodando o Front end
Para rodar a aplicação rode o seguinte comando pasta raiz do arquivo baixado.
```bash
cd manipulando-xml
npm install
npm run dev
```


### Tipagem

Para fins de estudo o xml foi tipado e estruturado no seguinte formato:

#### XML
```xml
<User>
  <Name>Eduardo</Name>
  <Age>29</Age>
  <DateOfBirth>16-5-2000</DateOfBirth>
  <FrontEnd>Vue JS</FrontEnd>
  <BackEnd>Django</BackEnd>
  <DataFormats>Binary</DataFormats>
</User>
```
#### Interface
```ts
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
```
