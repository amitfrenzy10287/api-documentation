import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
    position: relative;
    padding: 16px;
    min-height: 360px;
`;
export const CardContainer = styled.div`
  position: relative;  
  width: calc(30% - 16px);
  margin: 16px;
  box-shadow: 0 3px 5px 0 rgba(0,0,0,0.08);
  transition: box-shadow 0.3s ease-in-out;
  background-color: #ffffff;
  @media(max-width: 1024px){
        width: 40%;
  }
  @media(max-width: 620px){
        width: 100%;
  }
  &:hover ${Wrapper} {
        cursor: pointer;
        box-shadow: 0 0 11px rgba(33,33,33,.2);
        transition: 0.3s;
    }
`;

export const CardTitle = styled.div`
    font-size: 23px;
`;
export const LinkHead = styled(Link)`
    text-decoration: none;
    color: #686868;
    display: block;
    width: 100%;
`;
export const LinkContainer = styled.div`
    position: absolute;
    bottom: 16px;
    right: 16px;
    width: calc(100% - 32px);
    left: 16px;
    @media(max-width: 620px){
        position: absolute;
        bottom: 16px;
        right: 16px;
        width: 94%;
        left: 16px;
    }
`;
export const CardBody = styled.div`
    font-size: 16px;
    color: #686868;
    padding: 16px 0;
    min-height: 165px;
`;
export const GroupIcon = styled.img`
    width: 30px;
    height: 25px;
    margin-right: 10px;
`;
export const IconArrowRight = styled.img`
    width: 30px;
    height: 25px;
`;
export const InnerLink = styled.div`
    display: flex;
`;