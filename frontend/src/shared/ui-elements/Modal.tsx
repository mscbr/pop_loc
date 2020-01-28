import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import Backdrop from './Backdrop';

import styled from 'styled-components';
import { secondary } from '../Styles';

const StyledModal = styled.div`
    background: ${secondary};
    color: black;
    z-index: 100;
    position: fixed;
    top: 22vh;
    left: 10%;
    width: 80%;
    padding: 15px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 5px;
`;

interface Props extends RouteComponentProps {
    children?: JSX.Element[] | JSX.Element;
}

const Modal: React.FC<Props> = props => {
    const { children, history } = props;
    return (
        <>
            <Backdrop onClick={() => history.goBack()} />
            <StyledModal>{children}</StyledModal>
        </>
    );
};

export default withRouter(Modal);
