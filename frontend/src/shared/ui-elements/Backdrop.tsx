import React from 'react';

import styled, { keyframes } from 'styled-components';

interface Props {
    onClick?: () => void;
}
const appear = keyframes`
    0% {
        opacity: 0;
    }\
    100% {
        opacity: 1;
    }
`;
const StyledBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.75);
    z-index: 10;
    animation: 0.2s ease-out forwards ${appear};
`;

const Backdrop: React.FC<Props> = props => {
    return <StyledBackdrop onClick={props.onClick}></StyledBackdrop>;
};

export default Backdrop;
