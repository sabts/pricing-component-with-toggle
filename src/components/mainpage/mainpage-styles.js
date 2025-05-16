import styled from "styled-components";
import {COLORS} from "../../styles/colors"

const StyledSection = styled.section `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 64px;
    padding-inline: 24px;
`

const StyleHeader = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
`
const StyledH1 = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    color: ${COLORS.neutralMedium};
`

const StyledSubscriptionMode = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
    color:  ${COLORS.neutralMedium};
    font-weight: 700;
`

const HiddenCheckbox = styled.input`
    display: none;
`;

const StyledLabel = styled.label`
    position: relative;
    display: block;
    width: 56px;
    height: 32px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch; 
    border-radius: 40px;
    background: ${COLORS.gradient};

    &::after{
    content:'';
    position: absolute;
    top: 4px;
    width: 24px;
    height: 24px;
    border-radius: 100%;
    background-color:  ${COLORS.secondary};
    transition: transform 0.3s ease;
    transform: ${(props) => (props.$checked ? "translateX(20%)" : "translateX(110%)")};
}
}
`

const StyledCard = styled.div`
    width: 327px;
    height: 453px;
    border-radius: 10px;
    background: ${(props) =>
    props.$type === "professional" ? COLORS.gradient : COLORS.primary};
    box-shadow: 0px 20px 40px 0px rgba(212, 210, 244, 0.50);
    align-items: center;
    justify-content: center;
`

export {StyledSection, StyleHeader, StyledH1, StyledSubscriptionMode, StyledLabel, HiddenCheckbox, StyledCard}