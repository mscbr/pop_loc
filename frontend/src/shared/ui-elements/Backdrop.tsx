import React from 'react';
import ReactDOM from 'react-dom';

import styled from 'styled-components';

interface Props {
    onClick?: () => void;
}
const StyledBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.75);
    z-index: 10;
`;

const Backdrop: React.FC<Props> = props => {
    return <StyledBackdrop onClick={props.onClick}></StyledBackdrop>;
};

export default Backdrop;
