import React, { useState } from 'react';
import Backdrop from './Backdrop';

import styled from 'styled-components';
import { secondary } from '../Styles';

const StyledModal = styled.div`
    background: ${secondary};
`;

const Modal: React.FC = (props: any) => {
    return (
        <>
            <StyledModal></StyledModal>
        </>
    );
};

export default Modal;
