import { HttpException, Injectable } from '@nestjs/common';
import { XMLParser } from 'fast-xml-parser';
import { IUser, IUserParser } from './User.interface';
import { AsyncParser } from '@json2csv/node';
import * as fs from 'fs/promises';
import * as path from 'path';

@Injectable()
export class AppService {
  private basePathAssets = path.join(__dirname, '..', 'assets');
  getHello(): string {
    return 'Hello sssss';
  }

  async XMLToCsv(xmls: string[]) {
    const jsonsFromXmls = this.XMLsToJson(xmls);
    return await this.XMLsToCsv(jsonsFromXmls);
  }

  XMLsToJson(xmls: string[]) {
    const parser = new XMLParser();

    return xmls.map((xml) => this.XMLToJson(xml, parser));
  }

  async XMLfromServerToCsv() {
    try {
      const path = `${this.basePathAssets}/xmls`;
      const files: string[] = [];
      const filesName = await fs.readdir(path);
      for (const fileName of filesName) {
        const xml = await fs.readFile(`${path}/${fileName}`, 'utf-8');
        files.push(xml);
      }
      return await this.XMLToCsv(files);
    } catch (error) {
      throw new HttpException('Erro ao converter arquivo', 500);
    }
  }

  private XMLToJson(xml: string, parser: XMLParser) {
    const xmlParse = parser.parse(xml) as IUserParser;
    return xmlParse.User;
  }

  async XMLsToCsv(xmls: IUser[]) {
    const opts = { delimiter: '|' };
    const parser = new AsyncParser(opts);
    const csvs = await parser.parse(xmls).promise();
    return this.CreateCsv(csvs);
  }

  private CreateCsv(csvString: string) {
    try {
      const uuid = Math.random().toString(36).substring(7);
      const nameOutput = `output_${uuid}.csv`;
      const csvsPath = path.join(`${this.basePathAssets}/csvs`, nameOutput);
      fs.writeFile(csvsPath, csvString);
      return nameOutput;
    } catch (error) {
      console.log(error);
    }
  }
}
