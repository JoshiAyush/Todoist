import styled from "styled-components/macro";

export const Container = styled.nav`
    background-color: #db4c3f;
    height: fit-content;
`;

export const Control = styled.ul`
    width: 100%;
`;

export const List = styled.li`
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 30px;
    height: 30px;
    text-align: center;
    vertical-align: middle;
    float: left;

    &:hover {
        border-radius: 3px;
        background-color: rgba(255, 255, 255, 0.2);
    }
`;