import styled from "styled-components/macro";

export const Container = styled.nav`
    background-color: #db4c3f;
    height: fit-content;
    max-height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline-start: 40px;
    padding-inline-end: 40px;
    color: white;
    `;

export const List = styled.li`
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    min-width: 30px;
    max-width: fit-content;
    min-height: 30px;
    max-height: fit-content;
    text-align: center;
    vertical-align: middle;
    float: left;
    padding: 0 5px;

    &:hover {
        border-radius: 3px;
        background-color: rgba(255, 255, 255, 0.2);
    }
`;

export const Control = styled.ul`
    width: 100%;
    max-width: fit-content;
    padding-inline-start: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;

    &:nth-child(1) ${List}:nth-child(3):hover {
        background-color: #db4c3f;
    }
`;

export const Span = styled.span`
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const I = styled.i`
    position: absolute;
    padding: 0 5px;
    padding-top: 3px;
`;

export const InputHolder = styled.div`
    &:hover {
        background-color: #db4c3f;
    }
`;

export const Input = styled.input`
    margin: 0;
    border: 1px solid transparent;
    border-radius: 3px;
    min-width: 250px;
    width: 100%;
    box-sizing: border-box;
    outline: 0;
    color: #fff;
    padding: 5px 0 5px 34px;
    background: hsla(0,0%,100%,.2);
    -webkit-transition: width .2s ease-in,background .15s cubic-bezier(.4,0,.2,1);
    transition: width .2s ease-in,background .15s; 

    ::placeholder {
        color: white;
        opacity: 1;
    }

    &:hover {
        color: #202020;
        background: #fff;
        border: 1px solid transparent;

        ::placeholder {
            color: white;
            opacity: 1;
        }
    }

    &:focus {
        color: #202020;
        background: #fff;
        border: 1px solid transparent;
        min-width: 400px;

        ::placeholder {
            color: white;
            opacity: 1;
        }
    }
`;

