import { StatsService } from './stats.service';
export declare class StatsController {
    private readonly statsService;
    constructor(statsService: StatsService);
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
