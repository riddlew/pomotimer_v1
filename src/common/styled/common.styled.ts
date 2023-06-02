import styled from "styled-components";
import { breakpoints, screens } from "../breakpoints";

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
	margin: 0 auto;
	width: 100%;

	@media ${screens.sm} {
		max-width: ${breakpoints.sm};
	}
	@media ${screens.md} {
		max-width: ${breakpoints.md};
	}
	@media ${screens.lg} {
		max-width: ${breakpoints.lg};
	}
	@media ${screens.xl} {
		max-width: ${breakpoints.xl};
	}
	@media ${screens.xl2} {
		max-width: ${breakpoints.xl2};
	}
`;
