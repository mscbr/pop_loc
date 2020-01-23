import React from 'react';
import NavLinks from '../navigation/NavLinks';

import styled from 'styled-components';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import { primary, secondary, accent } from '../../Styles';

const Aside = styled.aside`
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
    height: 100vh;
    width: 50%;
    background: ${secondary};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
`;
const ColumnNavLinks = styled(NavLinks)`
    flex-direction: column;
    li {
        padding: 20px;
    }
`;

const SideDrawer: React.FC = () => {
    return (
        <Aside>
            <ColumnNavLinks />
        </Aside>
    );
};

export default SideDrawer;
