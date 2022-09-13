import styled from "styled-components";

interface Props{
    Mobile:boolean;
}
export const ChefDiv = styled.div<Props>`
width: ${props => props.Mobile? "" :"255px"};
display: ${props => props.Mobile? "" : "inline-block"};
margin: 15px;
`;