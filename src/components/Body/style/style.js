import styled from "styled-components/macro";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    height: fit-content;
`;

export const Hidden = styled.div`
    width: 100%;
    max-width: 305px;

    @media screen and (max-width: 1250px) {
        display: none;
    }
`;
