import React from 'react';

import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from 'react-icons/ai';
import { secondary, accent } from '../../Styles';

const Aside = styled.aside`
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
    height: 100vh;
    /* width: 40%; */
    width: 0%;
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
    li,
    button {
        display: none;
        background: ${accent};
        opacity: 0.5;
        padding: 10px;
        border-radius: 5px;
        outline: none;
        &:hover {
            cursor: pointer;
            opacity: 0.8;
        }
        transition: 0.3s;
    }
    @media only screen and (max-width: 539px) {
        button {
            display: initial;
        }
    }
    transition: 0.3s;
`;

interface Props {
    children?: JSX.Element[] | JSX.Element;
}

const SideDrawer: React.FC<Props> = props => {
    return (
        <Aside>
            <button>
                <IconContext.Provider value={{ size: '2em' }}>
                    <AiOutlineMenuUnfold />
                </IconContext.Provider>
            </button>
            {props.children}
        </Aside>
    );
};

export default SideDrawer;
