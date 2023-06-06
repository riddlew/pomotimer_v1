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
	const sidebarRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const selectedLi = timerRef.current[currentIdx]?.current;
		if (!selectedLi || !sidebarRef.current) return;

		const liBounds = selectedLi.getBoundingClientRect();
		const sidebarBounds = sidebarRef.current.getBoundingClientRect();

		if (liBounds.bottom > sidebarBounds.bottom - 30) {
			selectedLi.scrollIntoView({
				block: "start",
				behavior: "smooth",
			});
		}

		if (liBounds.top < sidebarBounds.top + 30) {
			selectedLi.scrollIntoView({
				block: "end",
				behavior: "smooth",
			});
		}
	}, [currentIdx]);

	return (
		<SC.TimerSidebar ref={sidebarRef}>
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
