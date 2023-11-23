interface IUplodtoDonwloadResponse {
  urlDownload: string;
  statusCode: number;
}

interface IDataXml {
  Name: string;
  Age: number;
  DateOfBirth: Date;
  FrontEnd: string;
  BackEnd: string;
  DataFormats: string;
}

interface IUplodtoDonwloadResponseJson {
  dados: IDataXml[];
  statusCode: number;
}
