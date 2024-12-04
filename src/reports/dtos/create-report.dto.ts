import { IsString, IsIn } from 'class-validator';
import { ReportType, TYPE_VALUES } from '../types/report-type';

export class CreateReportDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsIn(Object.values(TYPE_VALUES))
  type: ReportType;
}
