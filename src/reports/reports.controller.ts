import { Controller, Post, Body, Get, Patch, Param } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { CreateReportDto } from './dtos/create-report.dto';
import { ReportStatus } from './types/report-status';
import { TYPE_VALUES } from './types/report-type';

@Controller('report')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Post('create')
  createReport(@Body() createReportDto: CreateReportDto) {
    return this.reportsService.create(createReportDto);
  }

  @Get('list')
  getAllReports() {
    return this.reportsService.findAll();
  }

  @Get('options')
  getOptions() {
    return Object.values(TYPE_VALUES);
  }

  @Patch(':id/status')
  updateStatus(@Param('id') id: number, @Body('status') status: ReportStatus) {
    return this.reportsService.updateStatus(id, status);
  }
}
