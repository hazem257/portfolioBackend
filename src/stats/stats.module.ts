import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StatsService } from './stats.service';
import { StatsController } from './stats.controller'; // ✅ لازم تضيف الكنترولر
import { Project, ProjectSchema } from '../projects/schemas/project.schema';
import { Certificate, CertificateSchema } from '../certificates/schemas/certficate.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Project.name, schema: ProjectSchema }]),
    MongooseModule.forFeature([{ name: Certificate.name, schema: CertificateSchema }]),
  ],
  providers: [StatsService],
  controllers: [StatsController], // ✅ لازم يتسجل هنا
})
export class StatsModule {}
