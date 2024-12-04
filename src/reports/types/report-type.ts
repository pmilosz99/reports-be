export const TYPE_VALUES = {
  ROAD: 'drogi',
  SNOW_REMOVAL: 'odśnieżanie',
  TRASH: 'śmieci',
  DAMAGE: 'uszkodzenia',
  GREENERY: 'wodno/kanalizacyjne',
  SAFETY: 'porządek i bezpieczeństwo',
  OTHER: 'inne',
} as const;

export type ReportType = (typeof TYPE_VALUES)[keyof typeof TYPE_VALUES];
