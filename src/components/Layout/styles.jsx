import styled from 'styled-components';

export const NavWrapper = styled.div`
    display: flex;
    width: calc(100% - 20%);
    padding-left: 10%;
    padding-right: 10%;
    background: #07b3cf;
    color: #FFFFFF;
    cursor: pointer;
    @media (max-width: 1024px) {
        width: 100%;
        margin: 0;
        padding:0;
    }
`;
export const MainWrapper = styled.div`
    width: 100%;
    min-height: calc(100vh - 55.33px);
    background: #F0EEEE;
    display: flex;
`;
export const Menu = styled.ul`
    cursor: pointer;
    @media(max-width: 620px){
        display: none;
    }
`;
export const MenuItem = styled.li`
    list-style:none;
    color: #ffffff;
    display: inline;
    padding: 16px;
    width: 100px;
    cursor: pointer;
    & a {
        text-decoration: none;
        color: #FFFFFF;
    }
`;
export const LogoItem = styled.div`
    font-size: 22px;
    color: #FFFFFF;
    padding: 12px;
    & a {
        text-decoration: none;
        color: #FFFFFF;
    }
`;