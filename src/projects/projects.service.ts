import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Project, ProjectDocument } from './schemas/project.schema';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectModel(Project.name) private projectModel: Model<ProjectDocument>,
  ) {}

  async findAll(): Promise<Project[]> {
    return this.projectModel.find().sort({ createdAt: -1 }).exec();
  }

  async findOne(id: string): Promise<Project> {
    const project = await this.projectModel.findById(id).exec();
    if (!project) throw new NotFoundException('Project not found');
    return project;
  }

  async create(projectData: Partial<Project>): Promise<Project> {
    const newProject = new this.projectModel(projectData);
    return newProject.save();
  }

  async update(id: string, projectData: Partial<Project>): Promise<Project> {
    const updated = await this.projectModel
      .findByIdAndUpdate(id, projectData, { new: true })
      .exec();
    if (!updated) throw new NotFoundException('Project not found');
    return updated;
  }

  async delete(id: string): Promise<{ deleted: boolean }> {
    const deleted = await this.projectModel.findByIdAndDelete(id).exec();
    if (!deleted) throw new NotFoundException('Project not found');
    return { deleted: true };
  }
}
