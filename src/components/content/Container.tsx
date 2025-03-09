import { notFound } from 'next/navigation';
import React from 'react';

import { request } from '@/utils/http';

import Main from '../content/Main';
import Timeline from '../content/Timeline';
import Intro from './Intro';
import ScrollUpCover from './cover/ScrollUpCover';

type ContainerProps = {
  inviteCode?: string;
};

const requestInvitationData = async (inviteCode: string | undefined) => {
  if (!inviteCode) return null;

  try {
    const api = `/api/v1/invitation/${ inviteCode }`;
    const res = await request(api);
    const data = await res.json();
    const jsonData = JSON.parse(data.data.invuJson);

    return jsonData;
  } catch (error) {
    console.warn(error);
    return notFound(); 
  }
};

const renderContent = (data: any[]): React.ReactNode => {
  return data?.map((item: any) => {
    switch (item.type) {
      case 'intro':
        return <Intro />;
      case 'main':
        return <Main data={ item } />;
      case 'timeline':
        return <Timeline data={ item } />;
      default:
        return null;
    }
  });
};

export default async function Container({ inviteCode }: ContainerProps) {
  const invitationData = await requestInvitationData(inviteCode);

  return (
    <React.Fragment key={ inviteCode }>
      <ScrollUpCover />
      { renderContent(invitationData) }
    </React.Fragment>
  );
}
