import styled from "styled-components/macro";

export const Container = styled.div`

`;

export const Dot = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${({ color }) => color ? color : "grey"};
`;

export const Name = styled.span`

`;