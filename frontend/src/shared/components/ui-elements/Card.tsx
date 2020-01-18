import React from 'react';
import styled from 'styled-components';

import { secondary, accent2 } from '../../Styles';

interface Props {
    children: JSX.Element;
}

const StyledCard = styled.div`
    background: ${secondary};
    border-radius: 5px;
`;

const Card: React.FC<Props> = props => {
    return <>{props.children}</>;
};
export default Card;
