import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Report } from './report.entity';
import { CreateReportDto } from './dtos/create-report.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ReportStatus, STATUS_VALUES } from './types/report-status';

@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(Report)
    private readonly reportRepository: Repository<Report>,
  ) {}

  create(createReportDto: CreateReportDto) {
    const report = this.reportRepository.create(createReportDto);
    return this.reportRepository.save(report);
  }

  findAll() {
    return this.reportRepository.find();
  }

  async updateStatus(id: number, status: ReportStatus) {
    const report = await this.reportRepository.findOneBy({ id });
    if (!report) throw new NotFoundException('Report not found');

    report.status = status;
    if (status === STATUS_VALUES.COMPLETED) {
      report.completedAt = new Date();
    }
    return this.reportRepository.save(report);
  }
}
