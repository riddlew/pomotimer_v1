import styled from "styled-components";
import { breakpoints } from "../../common/breakpoints";

export const TimerSidebar = styled.div`
	margin: 8px;

	@media screen and (min-width: ${breakpoints.sm}) and (min-height: 400px) {
		margin: 20px;
	}
`;

export const TimerList = styled.ul`
	padding: 0;
	margin: 0;
	list-style: none;
	display: flex;
	justify-content: center;
	flex-direction: column;
	gap: 8px;

	@media screen and (min-width: ${breakpoints.sm}) and (min-height: 400px) {
		min-width: 200px;
	}
`;
