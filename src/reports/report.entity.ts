import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ReportStatus, STATUS_VALUES } from './types/report-status';
import { ReportType } from './types/report-type';

@Entity()
export class Report {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ default: STATUS_VALUES.NEW }) // Nowe zgłoszenia domyślnie mają status "new"
  status: ReportStatus;

  @Column()
  type: ReportType;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ nullable: true })
  completedAt: Date;
}
