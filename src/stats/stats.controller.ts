import { Controller, Get } from '@nestjs/common';
import { StatsService } from './stats.service';

@Controller('stats')
export class StatsController {
  constructor(private readonly statsService: StatsService) {}

  // ✅ إجمالي المشاريع والشهادات
  @Get()
  async getStats() {
    return this.statsService.getStats();
  }

  // ✅ عدد المشاريع فقط
  @Get('projects')
  async getProjectsCount() {
    return this.statsService.getProjectsCount();
  }

  // ✅ عدد الشهادات فقط
  @Get('certificates')
  async getCertificatesCount() {
    return this.statsService.getCertificatesCount();
  }
}
