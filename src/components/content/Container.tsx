import { request } from '@/utils/http';
import { notFound } from 'next/navigation';
import Cover from '../content/Cover';
import Intro from '../content/Intro';
import Main from '../content/Main';
import Timeline from '../content/Timeline';

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

export default async function Container({ inviteCode }: ContainerProps) {

  const invitationData = await requestInvitationData(inviteCode);

  const mainData = invitationData[0];
  const timelineData = invitationData[1];

  return (
    <div>
      <Cover type="intro"/>
      <Intro />
      <Main data={ mainData } />
      <Timeline data={ timelineData } />
    </div>
  );
}
