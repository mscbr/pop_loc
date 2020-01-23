import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { IconContext } from 'react-icons';

import { primary, secondary, accent2 } from '../../Styles';

interface Props {
    className?: string;
}

const StyledNavUl = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: stretch;
    margin: 1rem;
    li {
        border-radius: 5px;
        border: 1px transparent;
        height: 100%;
        min-width: 140px;
        a {
            padding: 1rem;
            vertical-align: middle;
        }
        &:hover {
            background: ${primary};
            opacity: 0.5;
            a {
                color: ${secondary};
            }
        }
        transition: 0.2s;
    }
    @media (max-width: 1000px) {
        a {
            font-size: medium;
        }
    }
`;

const NavLinks: React.FC<Props> = props => {
    const { className } = props;
    console.log('NavLinks props', props);
    return (
        <IconContext.Provider value={{ color: accent2 }}>
            <StyledNavUl className={className}>
                <li className={className}>
                    <NavLink to={`/`}>ADD GAME</NavLink>
                </li>
                <li>
                    <NavLink to={`/`}>MY GAMES</NavLink>
                </li>
                <li>
                    <NavLink to={`/`}>NOTIFICATIONS</NavLink>
                </li>
                <li>
                    <NavLink to={`/`}>SETTINGS</NavLink>
                </li>
                <li>
                    <NavLink to={`/`}>SIGN IN</NavLink>
                </li>
            </StyledNavUl>
        </IconContext.Provider>
    );
};

export default NavLinks;
