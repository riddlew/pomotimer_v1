import styled from "styled-components";
import { TimerLi, TimerText } from "./SidebarTimer.styled";
import { breakpoints } from "../../common/breakpoints";

export const AddTimerButton = styled(TimerLi)`
	border-style: dashed;
	background-color: rgba(255, 255, 255, 0.3);
	padding: 4px 12px;
`;

export const AddTimerIcon = styled(TimerText).attrs({
	as: "i",
})`
	font-size: min(18vw, 24vh);
	line-height: 0;

	@media screen and (min-width: ${breakpoints.xs}) and (min-height: 400px) {
		font-size: 64px;
	}
`;
