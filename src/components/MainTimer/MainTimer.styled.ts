import styled from "styled-components";
import { breakpoints } from "../../common/breakpoints";

export const TimerParent = styled.div`
	display: grid;
	align-items: flex-start;
	justify-content: center;
	position: relative;

	@media screen and (min-width: ${breakpoints.sm}) and (min-height: 400px) {
		height: 100vh;
		align-items: center;
	}

	@media screen and (min-height: 400px) {
		width: 100vw;
	}
`;

export const TimerContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;

	@media screen and (min-width: ${breakpoints.sm}) and (min-height: 400px) {
		justify-content: center;
		height: 100%;
	}
`;

export const TimerClockContainer = styled.div`
	width: 100%;
	display: grid;
	align-items: center;
	justify-content: center;

	@media screen and (min-width: ${breakpoints.sm}) and (min-height: 400px) {
		width: 400px;
		height: 300px;
	}
`;
