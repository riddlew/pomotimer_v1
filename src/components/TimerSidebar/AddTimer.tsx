import { useAppDispatch } from "../../hooks/redux";
import { addTimer } from "../../slices/timerSlice";
import { AddTimerButton } from "./AddTimer.styled";
import { TimerText } from "./SidebarTimer.styled";

export default function AddTimer() {
	const dispatch = useAppDispatch();

	const handleAddTimer = () => {
		dispatch(addTimer(10));
	};

	return (
		<AddTimerButton onClick={handleAddTimer}>
			<TimerText>
				<i className="bi-plus" />
			</TimerText>
		</AddTimerButton>
	);
}
