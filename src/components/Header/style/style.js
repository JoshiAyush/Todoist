import styled from "styled-components/macro";

export const Container = styled.div`
    border-bottom: solid 3px #ca2100;
    background-color: #db4c3f;
    transition: height 200ms ease-in;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 15);
    height: fit-content;
    z-index: 440;
    position: fixed;
    top: 0;
    width: 100%;
    color: white;
 
    @media screen and (max-width: 900px) {
      padding: 0 10px;
    }
`;

export const DarkMode = styled.div`
    -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0, 15);
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0, 15);
    background-color: #282828;
    border-color: transparent;
    border-bottom: solid 3px #282828;
    transition: height 200ms ease-in;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 15);
    height: fit-content;
    z-index: 440;
    position: fixed;
    top: 0;
    width: 100%;
    color: white;
 
    @media screen and (max-width: 900px) {
      padding: 0 10px;
    }
`;

export const Nav = styled.nav`
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    width: 100%;
    max-width: 922px;
    margin: auto auto;
    height: 100%;
`;

export const Logo = styled.div`
    padding-left: 8px;
    grid-area: 1/1;
    display: flex;
    align-items: center;
`;

export const Image = styled.img`
    width: 24px;
`;

export const Settings = styled.div`
    grid-area: 1/2;
    text-align: right;
`;

export const UnorderedList = styled.ul`
    float: right;
    font-weight: bolder;
    font-size: 1.2rem;
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