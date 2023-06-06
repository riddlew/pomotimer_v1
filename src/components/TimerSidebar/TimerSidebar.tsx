import { createRef, useEffect, useRef, useState } from "react";
import * as SC from "./TimerSidebar.styled";
import { useAppSelector } from "../../hooks/redux";
import { selectRunningIdx, selectTimerQueue } from "../../slices/timerSlice";
import SidebarTimer from "./SidebarTimer";
import AddTimer from "./AddTimer";

export default function TimerSidebar() {
	const timers = useAppSelector(selectTimerQueue);
	const currentIdx = useAppSelector(selectRunningIdx);
	const timerRef = useRef<React.RefObject<HTMLLIElement>[]>([]);

	useEffect(() => {
		timerRef.current[currentIdx].current?.scrollIntoView({
			behavior: "smooth",
		});
	}, [currentIdx, timerRef]);

	return (
		<SC.TimerSidebar>
			<SC.TimerList>
				{timers.map((timer, i) => {
					timerRef.current[i] = createRef<HTMLLIElement>();
					return (
						<SidebarTimer
							ref={timerRef.current[i]}
							key={`SidebarTimer-${i}`}
							selected={currentIdx === i}
							text={timer.startTime}
							timerIndex={i}
						/>
					);
				})}
				<AddTimer />
			</SC.TimerList>
		</SC.TimerSidebar>
	);
}
