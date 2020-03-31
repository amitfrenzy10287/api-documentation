import styled from "styled-components";
export const Container = styled.div`
    width: calc(100% - 20%);
    margin-left: 10%;
    margin-right: 10%;
    @media (max-width: 1024px) {
        width: 100%;
        margin: 0;
    }
`;
export const Header = styled.div`
    font-size: 24px;
    color: #686868;
    padding: 16px;
`;
export const SubHeader = styled.div`
    font-size: 18px;
    color: #686868;
    padding: 16px 16px 0;
`;

export const Content = styled.div`
    color: #686868;
    padding: 16px 16px 0;
    font-size: 14px;
`;