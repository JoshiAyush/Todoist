import styled from "styled-components/macro";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    min-width: calc(100% - 350px);
    width: 100%;
    height: fit-content;
`;

export const Svg = styled.div`
    width: 100%;
    max-width: 250px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const NoTasks = styled.div`
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Inbox = styled.div`
    width: 100%;
    box-sizing: border-box;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
    padding: 20px 80px;
`;

export const Title = styled.h2`

`;

export const Items = styled.ul`
    list-style-type: none;
    padding-inline-start: 0;
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const Small = styled.small`
    color: #777;
    font-size: 14px;
`;

export const Item = styled.li`
    margin: 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #777;
    font-size: 13px;
    cursor: pointer;

    & > ${Small} {
        margin-left: 5px;
    }

    &:hover {

    }
`;

export const NoTasksText = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-height: 180px;
    height: 100%;
`;

export const Link = styled.a`
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: #d1453b;
    cursor: pointer; 
`;

export const Help = styled.div`

`;

export const Desc = styled.div`

`;

export const NoTasksTitle = styled.h3`
    font-weight: normal;
`;