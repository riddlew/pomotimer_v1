import { useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { addTimer } from "../../slices/timerSlice";
import { AddTimerButton, AddTimerIcon } from "./AddTimer.styled";
import { TimerText } from "./SidebarTimer.styled";

export default function AddTimer() {
	const dispatch = useAppDispatch();

	const handleAddTimer = () => {
		dispatch(addTimer(10));
	};

	return (
		<AddTimerButton onClick={handleAddTimer}>
			<TimerText>
				<AddTimerIcon className="bi-plus" />
			</TimerText>
		</AddTimerButton>
	);
}
