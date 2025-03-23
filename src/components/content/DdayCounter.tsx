import Wrapper from '@/components/content/Wrapper';
import DdayCounterComponent from '@/components/content/ddaycounter/DdayCounterComponent';
import { parseTargetDate } from '@/utils/date';

type DdayCounterProps = {
    data: {
        targetDate?: string; // "yyyy-mm-dd HH:mm" 형식
        title?: string;
        subtitle?: string;
        bottomMessage?: string;
        showTimeDisplay?: boolean;
    }
}

export default function DdayCounter({ data }: DdayCounterProps) {
  const targetDate = parseTargetDate(data.targetDate);

  return (
    <Wrapper className="py-10 px-4">
      <DdayCounterComponent
        targetDate={ targetDate }
        title={ data.title }
        subtitle={ data.subtitle }
        bottomMessage={ data.bottomMessage }
        showTimeDisplay={ data.showTimeDisplay }
      />
    </Wrapper>
  );

}
