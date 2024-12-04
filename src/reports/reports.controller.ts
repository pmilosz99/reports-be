import { Controller, Post, Body, Get, Patch, Param } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { CreateReportDto } from './dtos/create-report.dto';
import { ReportStatus } from './types/report-status';
import { TYPE_VALUES } from './types/report-type';
import { Public } from 'src/auth/decorators/public.decorator';

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Public()
  @Post()
  createReport(@Body() createReportDto: CreateReportDto) {
    return this.reportsService.create(createReportDto);
  }

  @Public()
  @Get()
  getAllReports() {
    return this.reportsService.findAll();
  }

  @Public()
  @Get('options')
  getOptions() {
    return Object.values(TYPE_VALUES);
  }

  @Patch(':id/status')
  updateStatus(@Param('id') id: number, @Body('status') status: ReportStatus) {
    return this.reportsService.updateStatus(id, status);
  }
}
