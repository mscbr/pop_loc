import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FaBullhorn, FaBasketballBall } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import { IconContext } from 'react-icons';

import { accent2 } from '../../Styles';

const StyledNavUl = styled.ul`
    display: flex;
    justify-content: space-around;
    width: 300px;
`;

const NavLinks: React.FC = () => {
    return (
        <IconContext.Provider value={{ color: accent2 }}>
            <StyledNavUl>
                <li>
                    <NavLink to={`/`}>+</NavLink>
                </li>
                <li>
                    <NavLink to={`/`}>
                        <FaBasketballBall />
                    </NavLink>
                </li>
                <li>
                    <NavLink to={`/`}>
                        <FaBullhorn />
                    </NavLink>
                </li>
                <li>
                    <NavLink to={`/`}>
                        <FiSettings />
                    </NavLink>
                </li>
            </StyledNavUl>
        </IconContext.Provider>
    );
};

export default NavLinks;
