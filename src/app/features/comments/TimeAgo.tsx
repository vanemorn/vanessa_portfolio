import { parseISO, formatDistanceToNow } from 'date-fns';

// Define the type for the props
interface TimeAgoProps {
  timestamp: string; // Expecting a string in ISO format
}

const TimeAgo = ({ timestamp }: TimeAgoProps) => {
  let timeAgo = '';
  if (timestamp) {
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }

  return (
    <span title={timestamp}>
      &nbsp; <i>{timeAgo}</i>
    </span>
  );
};

export default TimeAgo;
