import { Model } from 'mongoose';
import { Project, ProjectDocument } from './schemas/project.schema';
export declare class ProjectsService {
    private projectModel;
    constructor(projectModel: Model<ProjectDocument>);
    findAll(): Promise<Project[]>;
    findOne(id: string): Promise<Project>;
    create(projectData: Partial<Project>): Promise<Project>;
    update(id: string, projectData: Partial<Project>): Promise<Project>;
    delete(id: string): Promise<{
        deleted: boolean;
    }>;
}
