export const STATUS_VALUES = {
  NEW: 'new',
  IN_PROGRES: 'in_progress',
  COMPLETED: 'completed',
} as const;

export type ReportStatus = (typeof STATUS_VALUES)[keyof typeof STATUS_VALUES];
