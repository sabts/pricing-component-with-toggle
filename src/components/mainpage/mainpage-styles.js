import styled from "styled-components";
import {COLORS} from "../../styles/colors"

const StyledSection = styled.section `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-inline: 24px;
  padding-top: 64px;
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
export {StyledSection, StyledLabel, HiddenCheckbox}