// src/app.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ProjectsModule } from './projects/projects.module';
import { MulterModule } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { CertificatesModule } from './certificates/certificates.module';
import { StatsModule } from './stats/stats.module';
import * as dotenv from 'dotenv';

dotenv.config();
const mongoUrl = process.env.MONGO_URL;
if (!mongoUrl) {
  throw new Error('MONGO_URL environment variable is not defined');
}

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(mongoUrl),
    MulterModule.register({ storage: memoryStorage() }),
    ProjectsModule,
    CertificatesModule,
    StatsModule
  ],
})
export class AppModule {}
