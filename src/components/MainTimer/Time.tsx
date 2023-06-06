import formatTime from "../../common/helpers/formatTime";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { resetTime, selectEditing, toggleEdit } from "../../slices/timerSlice";
import { Text, Input } from "./Time.styled";

export interface TimeProps {
	time: number;
}

export default function Time({ time }: TimeProps) {
	const dispatch = useAppDispatch();
	const editing = useAppSelector(selectEditing);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = Number(event.target.value);
		if (!Number.isNaN(newValue)) {
			const rounded = Math.floor(newValue);
			dispatch(resetTime(rounded));
		}
	};

	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Enter" || event.key === "Tab") {
			dispatch(toggleEdit());
		}
	};

	return (
		// eslint-disable-next-line react/jsx-no-useless-fragment
		<>
			{editing ? (
				<Input
					type="text"
					value={time}
					onChange={handleChange}
					onKeyDown={handleKeyDown}
				/>
			) : (
				<Text>{formatTime(time)}</Text>
			)}
		</>
	);
}
