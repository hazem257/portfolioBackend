import { ProjectsService } from './projects.service';
import { Project } from './schemas/project.schema';
export declare class ProjectsController {
    private readonly projectsService;
    constructor(projectsService: ProjectsService);
    findAll(): Promise<Project[]>;
    findOne(id: string): Promise<Project>;
    create(file: Express.Multer.File, project: any): Promise<Project>;
    getTest(): {
        projectTitle: string;
        about: string;
        category: string[];
        imgpath: string;
        live: string;
        Github: string;
    }[];
    delete(id: string): Promise<{
        deleted: boolean;
    }>;
    update(id: string, file: Express.Multer.File, project: any): Promise<Project>;
}
