import styled from "styled-components";
import {COLORS} from "../../styles/colors"
import { TEXT_SIZE } from "../../styles/textSize";
import { IMAGES } from "../../styles/images";

const StyledSection = styled.section `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 64px;
    padding-inline: 24px;
    padding-bottom: 32px;
    background: ${COLORS.primary};
    
&::after{
    content:'';
    position: absolute;
    background-repeat: no-repeat;
    background-size: cover;
    width: 200px;
    height: 200px;
    position: absolute;
    top: 0;
    right: 0;
    background-image: url(${IMAGES.bgTop});
}
`

const StyleHeader = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    margin-bottom: 82px
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
`
const StyledDivForCards = styled.div`
  display: flex;
  flex-direction: column;

 @media screen and (min-width: 1024px) {
   flex-direction: row;
   align-items: center;
   justify-content: center;
`

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;
    justify-content: center;
    width: 327px;
    height: 453px;
    margin-bottom: 2rem;
    border-radius: 10px;
    background: ${(props) =>
    props.$type === "professional" ? COLORS.gradient : COLORS.secondary};
    box-shadow: 0px 20px 40px 0px rgba(212, 210, 244, 0.50);

 @media screen and (min-width: 1024px) {
    height: ${(props) =>
    props.$type === "professional" ? "500px" : "453px"};
 }

`

const StyledSpaceSplitter = styled.div`
width: 269px;;
height: 1px;
margin:14px;
background: ${(props) =>
    props.$type === "professional" ? COLORS.secondary : COLORS.neutralMedium};
`


const StyledText = styled.p`
    font-size: ${(props) => TEXT_SIZE[props.size]}; 
    color: ${(props) =>
    props.$type === "professional" ? COLORS.secondary : '#6E728E'};
    font-weight: 700;
    margin: 8px;
`;

const StyledButton = styled.button`
    background: ${(props) =>
    props.$type === "professional" ? COLORS.secondary : COLORS.gradient};
    color: ${(props) =>
    props.$type === "professional" ? COLORS.accentuate  : COLORS.secondary};
    border: none;
    width: 268px;
    height: 44px;
    border-radius: 6px;
    font-weight: 700;
    font-size: ${(props) => TEXT_SIZE[props.size]}; 
`

export {StyledSection, StyleHeader, StyledH1, StyledSubscriptionMode, StyledLabel, HiddenCheckbox, StyledDivForCards ,StyledCard, StyledText,StyledSpaceSplitter , StyledButton}