import { Model } from 'mongoose';
import { Project } from '../projects/schemas/project.schema';
import { Certificate } from '../certificates/schemas/certficate.schema';
export declare class StatsService {
    private projectModel;
    private certificateModel;
    constructor(projectModel: Model<Project>, certificateModel: Model<Certificate>);
    getStats(): Promise<{
        projectsCount: number;
        certificatesCount: number;
    }>;
    getProjectsCount(): Promise<{
        projectsCount: number;
    }>;
    getCertificatesCount(): Promise<{
        certificatesCount: number;
    }>;
}
