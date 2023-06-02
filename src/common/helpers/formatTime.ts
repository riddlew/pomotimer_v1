const formatTime = (secondsRemaining: number) => {
	const minutes = Math.floor((secondsRemaining % 3600) / 60);
	const seconds = Math.floor(secondsRemaining % 60);
	const padZero = (num: number) => num.toString().padStart(2, "0");

	return `${padZero(minutes)}:${padZero(seconds)}`;
};

export default formatTime;
