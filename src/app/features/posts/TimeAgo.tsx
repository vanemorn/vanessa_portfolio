import React from 'react';
import { parseISO, formatDistanceToNow } from 'date-fns';

const TimeAgo: React.FC<{ timestamp: string }> = ({ timestamp }) => {
    let timeAgo = '';

    if (timestamp) {
        try {
            const date = parseISO(timestamp); // Parse ISO timestamp
            const timePeriod = formatDistanceToNow(date); // Calculate distance
            timeAgo = `${timePeriod} ago`;
        } catch (error) {
            console.error('Error parsing timestamp:', error);
            timeAgo = 'Invalid date';
        }
    }

    return (
        <span title={timestamp}>
            &nbsp; <i>{timeAgo}</i>
        </span>
    );
};

export default TimeAgo;
