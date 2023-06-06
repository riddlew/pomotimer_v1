import { useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { addTimer } from "../../slices/timerSlice";
import { AddTimerButton } from "./AddTimer.styled";
import { TimerText } from "./SidebarTimer.styled";

interface AddTimerProps {
	scrollRef: React.RefObject<HTMLDivElement>;
}

export default function AddTimer({ scrollRef }: AddTimerProps) {
	const dispatch = useAppDispatch();
	const [shouldScroll, setShouldScroll] = useState(false);

	const handleAddTimer = () => {
		dispatch(addTimer(10));
		setShouldScroll(true);
	};

	useEffect(() => {
		if (!shouldScroll) return;

		scrollRef.current?.scroll({
			top: scrollRef.current?.scrollHeight,
			behavior: "smooth",
		});
		setShouldScroll(false);
	}, [scrollRef, shouldScroll]);

	return (
		<AddTimerButton onClick={handleAddTimer}>
			<TimerText>
				<i className="bi-plus" />
			</TimerText>
		</AddTimerButton>
	);
}
