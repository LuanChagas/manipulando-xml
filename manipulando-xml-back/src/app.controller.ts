import {
  Controller,
  FileTypeValidator,
  Get,
  Param,
  ParseFilePipe,
  Post,
  StreamableFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { FilesInterceptor } from '@nestjs/platform-express';
import * as path from 'path';
import * as fs from 'fs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

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
    const outputName = await this.appService.XMLToCsv(
      files.map((file) => file.buffer.toString('utf-8')),
    );
    return {
      urlDownload: `http://localhost:3000/download/${outputName}`,
      statusCode: 200,
    };
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
    const jsonDados = this.appService.XMLsToJson(
      files.map((file) => file.buffer.toString('utf-8')),
    );
    return {
      dados: jsonDados,
      statusCode: 200,
    };
  }

  @Get('/download/:fileName')
  async getDownload(@Param('fileName') fileName: string) {
    const filePath = path.join(process.cwd(), 'src/assets/csvs', fileName);
    const file = fs.createReadStream(filePath);
    return new StreamableFile(file);
  }
  @Get('/download/')
  async getDownloadServer() {
    const filename = await this.appService.XMLfromServerToCsv();
    const filePath = path.join(process.cwd(), 'src/assets/csvs', filename);
    const file = fs.createReadStream(filePath, { encoding: 'utf-8' });
    return new StreamableFile(file, {
      type: 'text/csv',
      disposition: `attachment; filename=${filename}`,
    });
  }
}
