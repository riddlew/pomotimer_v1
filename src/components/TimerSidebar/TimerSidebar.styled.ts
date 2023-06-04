import styled from "styled-components";
import { breakpoints } from "../../common/breakpoints";

export const TimerSidebar = styled.div`
	overflow-y: scroll;
	height: 100%;
	width: 100%;

	@media screen and (min-width: ${breakpoints.sm}) and (min-height: 400px) {
		max-width: 300px;
	}
`;

export const TimerList = styled.ul`
	padding: 0;
	margin: 8px;
	list-style: none;
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	gap: 8px;

	@media screen and (min-width: ${breakpoints.sm}) and (min-height: 400px) {
		margin: 20px;
	}
`;
