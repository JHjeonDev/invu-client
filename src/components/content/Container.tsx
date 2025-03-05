import Cover from '../content/Cover';
import Intro from '../content/Intro';
import Main from '../content/Main';
import Timeline from '../content/Timeline';

type ContainerProps = {
  inviteCode?: string;
};

export default function Container({ inviteCode }: ContainerProps) {

  const mainData = {
    title: '안녕하세요',
    imgPath: '/images/horizontal-image-01.jpg',
    content: {
      text1: 'ㅇㅇ가 무럭무럭 자라\n어느덧 첫번째 생일을 맞이하였습니다.\n사랑과 관심으로 지켜봐주신 소중한 분들께\n감사의 마음으로 작은 자리를 마련하였습니다.',
      text2: '뜻깊은 날에 소중한 발걸음 하시어\n함께해 주시면 감사하겠습니다.',
      text3: '아빠 ㅇㅇㅇ · 엄마 ㅇㅇㅇ'
    }
  };

  const timelineData = {
    title: '타임라인',
    content: [
      { 
        imgPath: '/images/horizontal-image-01.jpg',
        text: '첫번째 텍스트'
      },
      {
        imgPath: '/images/horizontal-image-01.jpg',
        text: '두번째 텍스트'
      },
      {
        imgPath: '/images/horizontal-image-01.jpg',
        text: '세번째 텍스트'
      },
      {
        imgPath: '/images/horizontal-image-01.jpg',
        text: '네번째 텍스트'
      }
    ]
  };

  return (
    <div>
      <Cover type="intro"/>
      <Intro />
      <Main data={ mainData } />
      <Timeline data={ timelineData } />
    </div>
  );
}
