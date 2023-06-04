import styled from "styled-components";
import { breakpoints } from "./common/breakpoints";

export const MobileContainer = styled.div`
	display: flex;
	height: 100vh;

	@media screen and (max-width: ${breakpoints.sm}) and (orientation: portrait) {
		flex-direction: column;
	}
`;
