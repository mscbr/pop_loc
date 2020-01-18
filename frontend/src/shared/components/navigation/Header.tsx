import React from 'react';
import styled from 'styled-components';
import { FaBullhorn, FaBasketballBall } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import { IconContext } from 'react-icons';

import { primary, secondary, accent2 } from '../../Styles';

const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    color: ${accent2};
    background: ${secondary};
    font-size: 22px;
    ul {
        display: flex;
        justify-content: space-around;
        width: 300px;
    }
    img {
        width: 80px;
    }
`;

const Header: React.FC = () => {
    return (
        <>
            <IconContext.Provider value={{ color: accent2 }}>
                <header data-testid="header">
                    <NavBar>
                        <div className="logo">
                            <img src="/static/match-logo.png" alt="" />
                        </div>
                        <div className="settings">
                            <ul>
                                <li>+</li>
                                <li>
                                    <FaBasketballBall />
                                </li>
                                <li>
                                    <FaBullhorn />
                                </li>
                                <li>
                                    <FiSettings />
                                </li>
                            </ul>
                        </div>
                    </NavBar>
                </header>
            </IconContext.Provider>
        </>
    );
};
export default Header;
