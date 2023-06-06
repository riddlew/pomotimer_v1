import { forwardRef } from "react";
import formatTime from "../../common/helpers/formatTime";
import { useAppDispatch } from "../../hooks/redux";
import { setCurrent } from "../../slices/timerSlice";
import * as SC from "./SidebarTimer.styled";

interface SidebarTimerProps {
	text: string | number;
	selected: boolean;
	timerIndex: number;
}

// export default function SidebarTimer({
// 	text,
// 	selected,
// 	timerIndex,
// }: SidebarTimerProps) {
// 	const dispatch = useAppDispatch();

// 	const handleClick = () => {
// 		dispatch(setCurrent(timerIndex));
// 	};

// 	return (
// 		<SC.TimerLi selected={selected} onClick={handleClick}>
// 			<SC.TimerText>
// 				{typeof text === "string" ? text : formatTime(text)}
// 			</SC.TimerText>
// 		</SC.TimerLi>
// 	);
// }

const SidebarTimer = forwardRef(
	(
		{ text, selected, timerIndex }: SidebarTimerProps,
		ref: React.ForwardedRef<HTMLLIElement>
	) => {
		const dispatch = useAppDispatch();

		const handleClick = () => {
			dispatch(setCurrent(timerIndex));
		};

		return (
			<SC.TimerLi ref={ref} selected={selected} onClick={handleClick}>
				<SC.TimerText>
					{typeof text === "string" ? text : formatTime(text)}
				</SC.TimerText>
			</SC.TimerLi>
		);
	}
);

export default SidebarTimer;
