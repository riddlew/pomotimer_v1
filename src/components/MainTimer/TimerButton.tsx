import * as SC from "./TimerButton.styled";

interface TimerButtonProps {
	clickHandler: () => void;
	icon: string;
}

export default function TimerButton({ clickHandler, icon }: TimerButtonProps) {
	return (
		<SC.TimerButton type="button" onClick={clickHandler}>
			<i className={icon} />
		</SC.TimerButton>
	);
}
