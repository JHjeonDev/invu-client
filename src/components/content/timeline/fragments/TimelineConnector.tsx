type TimelineConnectorProps = {
  bgColor?: string;
  dotColor?: string;
};

export default function TimelineConnector({ bgColor = '#E5E5E5', dotColor = '#000000' }: TimelineConnectorProps) {
  return (
    <div
      className="w-full h-full relative"
      style={ { backgroundColor: bgColor } }
    >
      <div
        className="absolute w-[7px] h-[7px] rounded-full left-[-2px] top-1/2"
        style={ { backgroundColor: dotColor } }
      />
    </div>
  );
}
