import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { CertificatesService } from './certificates.service';
import { Certificate } from './schemas/certficate.schema';
import { CreateCertificateDto } from './dto/create-certificate.dto';
import { UpdateCertificateDto } from './dto/update-certificate.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { CloudinaryService } from '../cloudinary/cloudinary.service';

@Controller('certificates')
export class CertificatesController {
  constructor(
    private readonly certificatesService: CertificatesService,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async create(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: CreateCertificateDto,
  ) {
    let imageUrl: string | undefined;

    if (file) {
      const result = await this.cloudinaryService.uploadFile(file);
      imageUrl = result.secure_url;
    }

    return this.certificatesService.create({
      ...body,
      imageUrl,
    });
  }

  @Get()
  findAll() {
    return this.certificatesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.certificatesService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: UpdateCertificateDto) {
    return this.certificatesService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.certificatesService.remove(id);
  }
}
