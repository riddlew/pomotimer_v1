import { Button, TimerLi } from "./AddTimeBtn.styled";

interface AddTimeBtnProps {
	value: number;
	rotation: number;
	addTimeFn: () => void;
}

export default function AddTimeBtn({
	value,
	rotation,
	addTimeFn,
}: AddTimeBtnProps) {
	return (
		<TimerLi
			initial={{
				opacity: 0,
				rotate: rotation,
			}}
			animate={{
				opacity: 1,
				rotate: rotation,
			}}
			exit={{
				opacity: 0,
				rotate: rotation,
			}}
			transition={{
				ease: "easeOut",
				duration: 0.25,
			}}
			rotation={rotation}
		>
			<Button
				initial={{
					opacity: 0,
					rotate: -rotation,
					translateY: -300,
				}}
				animate={{
					opacity: 1,
					rotate: -rotation,
					translateY: -250,
				}}
				exit={{
					opacity: 0,
					rotate: -rotation,
					translateY: -300,
				}}
				transition={{
					ease: "easeOut",
					duration: 0.25,
				}}
				type="button"
				value={value}
				rotation={rotation}
				onClick={addTimeFn}
			>
				{value}
			</Button>
		</TimerLi>
	);
}
