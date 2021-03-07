//react scroll link by default
import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
background: ${({primary}) => (primary ? '#F26A2E' : '#077BF1')};
white-space: nowrap;
padding: ${({ big }) => (big ? '14px  48px' : '12px 30px')};
color: #fff;
font.size: ${({ big }) => (big ? '20px' : '16px')};
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
border-radius: ${({ round }) => (round ? '50px' : 'none')};
display: flex;
justify-content: center;
align-items: center;

&:hover {
    background: ${({primary}) => (primary ? '#077BF1' : '#F26A2E')};
    transform: translateY(-2px);
}
`;
