import { parseISO, formatDistanceToNow } from "date-fns";
import { STimeAgo } from "./styles/TimeAgo.styled";

const TimeAgo = ({timestamp}) => {
    let timeAgo = ''
    if (timestamp) {
        const date = parseISO(timestamp)
        const timePeriod = formatDistanceToNow(date)
        timeAgo = `${timePeriod} ago`
    }

    return (
            <i>{timeAgo}</i>
    )
}

export default TimeAgo;

/*
return (
    <STimeAgo title={timestamp}>
        <i>{timeAgo}</i>
    </STimeAgo>

)
*/