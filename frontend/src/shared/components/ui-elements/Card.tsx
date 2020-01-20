import React from 'react';
import styled from 'styled-components';

import { secondary, accent2 } from '../../Styles';

interface Props {
    horizontal?: boolean;
    children: JSX.Element[] | JSX.Element;
}

const StyledCard = styled.div`
    display: flex;
    flex-direction: ${(props: Props) => (props.horizontal ? 'row' : 'column')};
    justify-content: space-around;
    background: ${secondary};
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const Card: React.FC<Props> = props => {
    return <StyledCard horizontal>{props.children}</StyledCard>;
};
export default Card;
