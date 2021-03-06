import React from 'react';

import styled from 'styled-components';
import { primary, secondary, accent2 } from '../Styles';

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    color: ${accent2};
    background: ${secondary};
    font-size: 18px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.26);
    padding: 0 1rem;
    z-index: 5;
    img {
        width: 80px;
    }

    @media (max-width: 850px) {
        justify-content: space-around;
        padding: 0;
        div {
            /* not displaying logo */
            display: none;
        }
    }
    @media (min-width: 768px) {
    }
    @media only screen and (max-width: 540px) {
        display: none;
    }
`;

interface Props {
    children: JSX.Element[] | JSX.Element;
}

const MainHeader: React.FC<Props> = props => {
    return <Header>{props.children}</Header>;
};
export default MainHeader;
