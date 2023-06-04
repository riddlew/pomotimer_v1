import formatTime from "../../common/helpers/formatTime";
import * as SC from "./SidebarTimer.styled";

interface SidebarTimerProps {
	text: string | number;
	selected: boolean;
}

export default function SidebarTimer({ text, selected }: SidebarTimerProps) {
	return (
		<SC.TimerLi selected={selected}>
			<SC.TimerText>
				{typeof text === "string" ? text : formatTime(text)}
			</SC.TimerText>
		</SC.TimerLi>
	);
}
