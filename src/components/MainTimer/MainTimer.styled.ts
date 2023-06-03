import styled from "styled-components";
import { breakpoints } from "../../common/breakpoints";

export const TimerParent = styled.div`
	width: 100vw;
	height: 100vh;
	display: grid;
	align-items: center;
	justify-content: center;
	position: relative;
`;

export const TimerContainer = styled.div`
	position: relative;
	display: flex;
	height: 100%;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const TimerClockContainer = styled.div`
	width: 100%;
	display: grid;
	align-items: center;
	justify-content: center;

	@media screen and (min-width: ${breakpoints.xs}) and (min-height: 400px) {
		width: 400px;
		height: 300px;
	}
`;
