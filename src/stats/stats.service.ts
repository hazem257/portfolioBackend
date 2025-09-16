import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Project } from '../projects/schemas/project.schema';
import { Certificate } from '../certificates/schemas/certficate.schema';

@Injectable()
export class StatsService {
  constructor(
    @InjectModel(Project.name) private projectModel: Model<Project>,
    @InjectModel(Certificate.name) private certificateModel: Model<Certificate>,
  ) {}

// Total 
  async getStats() {
    const projectsCount = await this.projectModel.countDocuments();
    const certificatesCount = await this.certificateModel.countDocuments();
    return { projectsCount, certificatesCount };
  }

  // Num of projectes
  async getProjectsCount() {
    return { projectsCount: await this.projectModel.countDocuments() };
  }

  // Num of 
  async getCertificatesCount() {
    return { certificatesCount: await this.certificateModel.countDocuments() };
  }
}
