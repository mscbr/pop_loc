import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FaBullhorn, FaBasketballBall } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import { IconContext } from 'react-icons';

import { primary, secondary, accent2, accentFont } from '../../Styles';

interface Props {
    className?: string;
}

const StyledNavUl = styled.ul`
    display: flex;
    justify-content: space-around;
    width: 300px;
    li {
        border-radius: 5px;
        &:hover {
            background: ${primary};
        }
        transition: 0.2s;
    }
`;

const SignIn = styled.span`
    border: 1px solid ${accentFont};
    border-radius: 5px;
    padding: 5px;
    &:hover {
        cursor: pointer;
        background: ${accentFont};
        color: ${secondary};
        transition: 0.2s;
    }
    &:active {
        cursor: pointer;
        background: ${secondary};
        color: ${accentFont};
    }
`;

const NavLinks: React.FC<Props> = props => {
    const { className } = props;
    console.log('NavLinks props', props);
    return (
        <IconContext.Provider value={{ color: accent2 }}>
            <StyledNavUl className={className}>
                <li className={className}>
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
                <li>
                    <NavLink to={`/`}>
                        <SignIn>Sign in</SignIn>
                    </NavLink>
                </li>
            </StyledNavUl>
        </IconContext.Provider>
    );
};

export default NavLinks;
