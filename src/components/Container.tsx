import Cover from './Cover';
import Intro from './Intro';
import Main from './Main';

export default function Container({ inviteCode }: { inviteCode?: string }) {

  return (
    <div>
      <Cover type="intro"/>
      <Intro />
      <Main />
    </div>
  );
}
