'use client';

import { usePageEntryStore } from '../stores/pageEntry';
import Content from './Content';
import Cover from './Cover';

export default function Container({ inviteCode }: { inviteCode?: string }) {
  const { isInitialized } = usePageEntryStore(state => state);

  return (
    <div
      style={ { overflow: isInitialized ? 'hidden' : 'visible' } }
    >
      <Cover type="intro"/>
      <Content type="intro"/>
      <Content />
    </div>
  );
}
