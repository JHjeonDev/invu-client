'use client';

import { usePageEntryStore } from '../stores/pageEntry';
import Content from './Content';
import Conver from './Cover';

export default function Container({ inviteCode }: { inviteCode?: string }) {
  const { isInitialized } = usePageEntryStore(state => state);

  console.log(inviteCode);
  return (
    <div className="h-screen w-full relative" style={ { overflow: isInitialized ? 'hidden' : 'visible' } }>
      <Conver />
      <Content type="intro"/>
      <Content />
    </div>
  );
}
