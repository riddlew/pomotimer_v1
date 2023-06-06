import { useEffect, useState } from "react";
import Time from "./Time";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
	deleteCurrentTimer,
	resetTime,
	selectEditing,
	selectIsRunning,
	selectStartTime,
	selectTime,
	setIsRunning,
	setTime,
	switchToNextTimer,
	switchToPreviousTimer,
	toggleEdit,
} from "../../slices/timerSlice";
import {
	TimerClockContainer,
	TimerContainer,
	TimerParent,
} from "./MainTimer.styled";
import SquareProgressBar from "./SquareProgressBar";
import TimerButton from "./TimerButton";

export default function MainTimer() {
	const dispatch = useAppDispatch();
	const time = useAppSelector(selectTime);
	const startTime = useAppSelector(selectStartTime);
	const isRunning = useAppSelector(selectIsRunning);
	const editing = useAppSelector(selectEditing);
	const [progress, setProgress] = useState(100);

	const handlePause = () => {
		if (editing) {
			dispatch(toggleEdit());
		}
		dispatch(setIsRunning(!isRunning));
	};

	const handleReset = () => {
		dispatch(resetTime(startTime));
	};

	const handleForward = () => {
		dispatch(switchToNextTimer());
	};

	const handlePrevious = () => {
		dispatch(switchToPreviousTimer());
	};

	const handleDelete = () => {
		dispatch(deleteCurrentTimer());
	};

	const handleEdit = () => {
		dispatch(setIsRunning(false));
		dispatch(toggleEdit());
	};

	useEffect(() => {
		function updateTime() {
			if (isRunning && time > 0) {
				dispatch(setTime(time - 1));
			} else if (isRunning && time <= 0) {
				dispatch(setIsRunning(false));
			}
		}
		const interval = setInterval(updateTime, 1000);
		return () => {
			clearInterval(interval);
		};
	}, [time, isRunning, dispatch]);

	useEffect(() => {
		setProgress(startTime === 0 ? 0 : (time / startTime) * 100);
	}, [time, startTime]);

	return (
		<TimerParent>
			<TimerContainer>
				<TimerClockContainer>
					<SquareProgressBar percent={progress} />
					<Time time={time} />
				</TimerClockContainer>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						width: "100%",
						flexWrap: "wrap",
					}}
				>
					<TimerButton
						clickHandler={handlePrevious}
						icon="bi-arrow-left-circle"
					/>
					<TimerButton
						clickHandler={handlePause}
						icon={isRunning ? "bi-pause-fill" : "bi-play"}
					/>
					<TimerButton
						clickHandler={handleReset}
						icon="bi-arrow-counterclockwise"
					/>
					<TimerButton
						clickHandler={handleForward}
						icon="bi-arrow-right-circle"
					/>
					<TimerButton clickHandler={handleDelete} icon="bi-trash" />
					<TimerButton clickHandler={handleEdit} icon="bi-pencil" />
				</div>
			</TimerContainer>
		</TimerParent>
	);
}
