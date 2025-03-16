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

export function parseTargetDate(dateString?: string): Date {
  if (!dateString) {
    return new Date();
  }

  const dateRegex = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/;
  if (!dateRegex.test(dateString)) {
    console.error('날짜 형식이 올바르지 않습니다. "yyyy-mm-dd HH:mm" 형식을 사용하세요.');
    return new Date();
  }

  const [ datePart, timePart ] = dateString.split(' ');
  const [ year, month, day ] = datePart.split('-').map(Number);
  const [ hour, minute ] = timePart.split(':').map(Number);
  const targetDate = new Date(year, month - 1, day, hour, minute);

  if (isNaN(targetDate.getTime())) {
    console.error('유효하지 않은 날짜입니다.');
    return new Date();
  }

  return targetDate;
}
