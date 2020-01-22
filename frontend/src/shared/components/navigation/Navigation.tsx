import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Header from './Header';
import NavLinks from './NavLinks';

import { primary, secondary, accent2 } from '../../Styles';

const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    color: ${accent2};
    background: ${secondary};
    font-size: 22px;
    img {
        width: 80px;
    }

    @media only screen and (max-width: 500px) {
        justify-content: flex-end;
        ul {
            display: none;
        }
    }
`;
// implement a drawer icon
const Navigation: React.FC = () => {
    return (
        <Header>
            <NavBar>
                <div className="logo">
                    <Link to={`/`}>
                        <img src="/static/match-logo.png" alt="" />
                    </Link>
                </div>
                <NavLinks />
            </NavBar>
        </Header>
    );
};

export default Navigation;
