import formatTime from "../../common/helpers/formatTime";
import { Text } from "./Time.styled";

export interface TimeProps {
	time: number;
}

export default function Time({ time }: TimeProps) {
	return <Text>{formatTime(time)}</Text>;
}
