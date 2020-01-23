import React from 'react';

import styled from 'styled-components';
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from 'react-icons/ai';
import { secondary } from '../../Styles';

const Aside = styled.aside`
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
    height: 100vh;
    /* width: 40%; */
    width: 0;
    background: ${secondary};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    img {
        width: 120px;
    }
    div {
        text-align: center;
    }
    img,
    li {
        display: none;
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
                <AiOutlineMenuUnfold />
            </button>
            {props.children}
        </Aside>
    );
};

export default SideDrawer;
