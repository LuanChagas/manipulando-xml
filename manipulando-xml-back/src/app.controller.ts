import {
  Controller,
  FileTypeValidator,
  Get,
  Param,
  ParseFilePipe,
  Post,
  Res,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { FilesInterceptor } from '@nestjs/platform-express';
import * as path from 'path';
import * as fs from 'fs';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  private basePathAssets = path.join(__dirname, '..', 'assets');
  @Get()
  getHello() {
    return {
      statusCode: 200,
      message: 'Hello',
    };
  }

  @Post('uploadResponseCSV')
  @UseInterceptors(FilesInterceptor('file'))
  async postUploadResponseCSV(
    @UploadedFiles(
      new ParseFilePipe({
        validators: [new FileTypeValidator({ fileType: 'xml' })],
      }),
    )
    files: Array<Express.Multer.File>,
  ) {
    try {
      const outputName = await this.appService.XMLToCsv(
        files.map((file) => file.buffer.toString('utf-8')),
      );
      return {
        urlDownload: `http://localhost:3000/download/${outputName}`,
        statusCode: 200,
      };
    } catch (error) {
      return {
        statusCode: 500,
        message: 'Erro ao converter arquivo',
      };
    }
  }

  @Post('uploadResponseJson')
  @UseInterceptors(FilesInterceptor('file'))
  async postUploadResponseJson(
    @UploadedFiles(
      new ParseFilePipe({
        validators: [new FileTypeValidator({ fileType: 'xml' })],
      }),
    )
    files: Array<Express.Multer.File>,
  ) {
    try {
      const jsonDados = this.appService.XMLsToJson(
        files.map((file) => file.buffer.toString('utf-8')),
      );
      return {
        dados: jsonDados,
        statusCode: 200,
      };
    } catch (error) {
      return {
        statusCode: 500,
        message: 'Erro ao converter arquivo',
      };
    }
  }

  @Get('/download/:fileName')
  async getDownload(@Param('fileName') fileName: string, @Res() res: Response) {
    try {
      const filePath = path.join(`${this.basePathAssets}/csvs`, fileName);

      const file = fs.createReadStream(filePath);
      file.on('error', () => {
        return res.status(400).json({
          statusCode: 400,
          message: 'Arquivo não encontrado',
        });
      });
      file.on('end', () => {
        fs.unlinkSync(filePath);
      });
      res.setHeader('Content-Type', 'text/csv');
      res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);
      return file.pipe(res);
    } catch (error) {
      return {
        statusCode: 400,
        message: 'Arquivo não encontrado',
      };
    }
  }
  @Get('/download/')
  async getDownloadServer(@Res() res: Response) {
    try {
      const filename = await this.appService.XMLfromServerToCsv();
      const filePath = path.join(`${this.basePathAssets}/csvs`, filename);
      const file = fs.createReadStream(filePath, { encoding: 'utf-8' });
      file.on('error', () => {
        return res.status(400).json({
          statusCode: 400,
          message: 'Arquivo não encontrado',
        });
      });
      file.on('end', () => {
        fs.unlinkSync(filePath);
      });
      res.setHeader('Content-Type', 'text/csv');
      res.setHeader('Content-Disposition', `attachment; filename=${filename}`);
      return file.pipe(res);
    } catch (error) {
      console.log(error);
      return {
        statusCode: 400,
        message: 'Arquivo não encontrado',
      };
    }
  }
}
