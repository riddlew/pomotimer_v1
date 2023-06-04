import * as SC from "./TimerSidebar.styled";
import { useAppSelector } from "../../hooks/redux";
import { selectRunningIdx, selectTimerQueue } from "../../slices/timerSlice";
import SidebarTimer from "./SidebarTimer";

export default function TimerSidebar() {
	const timers = useAppSelector(selectTimerQueue);
	const currentIdx = useAppSelector(selectRunningIdx);

	return (
		<SC.TimerSidebar>
			<SC.TimerList>
				{timers.map((timer, i) => (
					<SidebarTimer
						selected={currentIdx === i}
						text={timer.startTime}
					/>
				))}
			</SC.TimerList>
		</SC.TimerSidebar>
	);
}
