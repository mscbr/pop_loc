import React from 'react';
import { Link } from 'react-router-dom';

import MainHeader from './Header';
import SideDrawer from './SideDrawer';
import NavLinks from './NavLinks';

import styled from 'styled-components';

const ColumnNavLinks = styled(NavLinks)`
    flex-direction: column;
    align-items: flex-end;
    padding: 0;
    width: 90%;
    height: 50%;
    font-size: 28px;
    li {
        width: 100%;
        margin-top: 20px;
    }
`;

// implement a drawer icon
const Navigation: React.FC = () => {
    return (
        <>
            <SideDrawer>
                <div className="logo">
                    <Link to={`/`}>
                        <img src="/static/match-logo.png" alt="" />
                    </Link>
                </div>
                <ColumnNavLinks />
            </SideDrawer>
            <MainHeader>
                <div className="logo">
                    <Link to={`/`}>
                        <img src="/static/match-logo.png" alt="" />
                    </Link>
                </div>
                <NavLinks />
            </MainHeader>
        </>
    );
};

export default Navigation;
