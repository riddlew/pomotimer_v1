import { useRef } from "react";
import * as SC from "./TimerSidebar.styled";
import { useAppSelector } from "../../hooks/redux";
import { selectRunningIdx, selectTimerQueue } from "../../slices/timerSlice";
import SidebarTimer from "./SidebarTimer";
import AddTimer from "./AddTimer";

export default function TimerSidebar() {
	const timers = useAppSelector(selectTimerQueue);
	const currentIdx = useAppSelector(selectRunningIdx);
	const listRef = useRef<HTMLDivElement>(null);

	return (
		<SC.TimerSidebar ref={listRef}>
			<SC.TimerList>
				{timers.map((timer, i) => (
					<SidebarTimer
						key={`SidebarTimer-${i}`}
						selected={currentIdx === i}
						text={timer.startTime}
						timerIndex={i}
					/>
				))}
				<AddTimer scrollRef={listRef} />
			</SC.TimerList>
		</SC.TimerSidebar>
	);
}
