import { Injectable } from '@nestjs/common';
import { XMLParser } from 'fast-xml-parser';
import { IUser, IUserParser } from './User.interface';
import { AsyncParser } from '@json2csv/node';
import * as fs from 'fs/promises';
import * as fsSync from 'fs';
import * as path from 'path';

@Injectable()
export class AppService {
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

  XMLfromServerToCsv() {
    try {
      const files = fsSync.readdirSync('src/assets/xmls');
      return this.XMLToCsv(
        files.map((file) =>
          fsSync.readFileSync(
            path.join(process.cwd(), 'src/assets/xmls', file),
            'utf-8',
          ),
        ),
      );
    } catch (error) {
      console.log(error);
    }
  }

  private XMLToJson(xml: string, parser: XMLParser) {
    const xmlParse = parser.parse(xml) as IUserParser;
    console.log(xmlParse.User);
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
      console.log(uuid);
      const csvsPath = path.join(process.cwd(), 'src/assets/csvs', nameOutput);
      fs.writeFile(csvsPath, csvString);
      return nameOutput;
    } catch (error) {
      console.log(error);
    }
  }
}
