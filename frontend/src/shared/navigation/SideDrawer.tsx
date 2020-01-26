import React, { useState } from 'react';
import Backdrop from '../ui-elements/Backdrop';

import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from 'react-icons/ai';
import { secondary, accent } from '../Styles';

const Aside = styled.aside`
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
    height: 100vh;
    width: ${(props: { open: boolean }) => (props.open ? '60%' : '0')};
    opacity: ${(props: { open: boolean }) => (props.open ? 1 : 0.6)};
    background: ${secondary};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    img {
        width: 120px;
    }
    div {
        text-align: center;
    }
    /* hiding all children elements */
    img,
    li {
        display: ${(props: { open: boolean }) =>
            props.open ? 'initial' : 'none'};
    }
    button {
        display: none;
        background: ${(props: { open: boolean }) =>
            props.open ? 'transparent' : accent};
        width: ${(props: { open: boolean }) =>
            props.open ? '100%' : 'initial'};
        opacity: 0.5;
        padding: 10px;
        border: none;
        border-radius: 5px;
        outline: none;
        &:hover {
            cursor: pointer;
            opacity: 0.8;
        }
    }
    @media only screen and (max-width: 539px) {
        button {
            display: initial;
        }
    }
    /* side drawer hidden in wider screens */
    @media only screen and (min-width: 539px) {
        width: 0;
        img,
        li {
            display: none;
        }
    }
    transition: 0.3s;
`;

interface Props {
    children?: JSX.Element[] | JSX.Element;
}

const SideDrawer: React.FC<Props> = props => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    return (
        <>
            {isDrawerOpen && (
                <Backdrop onClick={() => setIsDrawerOpen(false)} />
            )}
            <Aside open={isDrawerOpen}>
                <button onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
                    <IconContext.Provider value={{ size: '2em' }}>
                        {isDrawerOpen ? (
                            <AiOutlineMenuFold />
                        ) : (
                            <AiOutlineMenuUnfold />
                        )}
                    </IconContext.Provider>
                </button>
                {props.children}
            </Aside>
        </>
    );
};

export default SideDrawer;
