import React from  'react';
import { Link } from 'react-router-dom';
import { NavWrapper,Menu, MenuItem, MainWrapper, LogoItem } from './styles';

const Layout = (props)=>{
    return(
        <>
            <NavWrapper>
                <LogoItem><Link to="/developer/documentation">DOCUMENTATION</Link></LogoItem>
                <Menu>
                    <MenuItem>
                        <Link to="/developer/documentation">Home</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/developer/en/api/dummy1/intro">Introduction</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/developer/en/api/dummy1/guide">Guide</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/developer/en/api/dummy1/reference">Reference</Link>
                    </MenuItem>
                </Menu>
            </NavWrapper>
            <MainWrapper>
                {props.children}
            </MainWrapper>
        </>
    );
}

export default Layout;