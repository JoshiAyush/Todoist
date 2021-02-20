import styled from "styled-components/macro";

export const Container = styled.div`
    min-width: 305px;
    width: fit-content;
    min-height: calc(100vh - 44px);
    height: 100%;
    box-sizing: border-box;
    padding-top: 30px;
    padding-left: 35px;
    padding-right: 5px;
    position: fixed;
    left: 0;
    -webkit-transition: left .25s cubic-bezier(.4,0,.2,1);
    transition: left .25s cubic-bezier(.4,0,.2,1);
    overflow-x: hidden;
    overflow-y: hidden;
    background-color: #fafafa;
    -webkit-touch-callout: none!important;
    -webkit-user-select: none!important;
    -moz-user-select: none!important;
    -ms-user-select: none!important;
    user-select: none!important;
`;

export const UnorderedList = styled.ul`
    list-style-type: none;
    padding-inline-start: 0;
`;

export const Span = styled.span`

`;

export const List = styled.li`
    display: flex;
    align-items: center;
    cursor: pointer;
    min-height: 24px;
    padding: 8px;
    border-radius: 3px;
    
    & > ${Span} {
        margin-right: 5px;
    }

    &:hover {
        background-color: #fff;
    }
`;

export const Inner = styled.div`
    &:hover {
        &:nth-child(1) {
            background-color: #fff;
        }
    }
`;

export const Middle = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #f1f1f1;
    cursor: pointer;

    & > ${Inner} {
        display: flex;
        align-items: center;
        padding-inline-start: 10px;

        & > ${Span} {
            transform: rotate(270deg);
            color: rgba(0,0,0,.54);
        }

        & > ${Span}:last-of-type {
            position: absolute;
            right: 0;
            margin-right: 18px;
            color: rgba(0,0,0,.54);
        }
    }
`;

export const H2 = styled.h2`
    font-weight: normal;
    font-size: 16px;
    margin-left: 8px;
`;

export const Projects = styled.ul`

`;