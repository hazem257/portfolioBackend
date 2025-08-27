import { Module } from '@nestjs/common';
import { CertificatesService } from './certificates.service';
import { CertificatesController } from './certificates.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Certificate, CertificateSchema } from './schemas/certficate.schema';
import { CloudinaryModule } from '../cloudinary/cloudinary.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Certificate.name, schema: CertificateSchema }]),
    CloudinaryModule,
  ],
  controllers: [CertificatesController],
  providers: [CertificatesService],
})
export class CertificatesModule {}
