import { MS_PER_DAY, MS_PER_HOUR, MS_PER_MINUTE, MS_PER_SECOND } from '@/utils/constants/date';

export function padNumber(num: number, length: number = 2): string {
  return num.toString().padStart(length, '0');
}

export function calcTimeLeft(targetDate: Date): {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
} {
  const now = new Date().getTime();
  const distance = targetDate.getTime() - now;

  if (distance < 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(distance / MS_PER_DAY),
    hours: Math.floor((distance % MS_PER_DAY) / MS_PER_HOUR),
    minutes: Math.floor((distance % MS_PER_HOUR) / MS_PER_MINUTE),
    seconds: Math.floor((distance % MS_PER_MINUTE) / MS_PER_SECOND)
  };
}
