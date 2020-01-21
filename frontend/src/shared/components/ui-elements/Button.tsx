import React from 'react';
import styled from 'styled-components';

import { primary, secondary, accentFont } from '../../Styles';

interface Props {
    text: string;
}

const StyledButton = styled.button`
    background: ${secondary};
    color: ${accentFont};
    padding: 10px;
    border: 1px solid ${accentFont};
    border-radius: 5px;
    &:hover {
        cursor: pointer;
        background: ${accentFont};
        color: ${secondary};
        transition: 0.2s;    
    }
    &:active {
        cursor: pointer;
        background: ${secondary};
        color: ${accentFont};  
    }
    outline: none;
`;

const Button: React.FC<Props> = props => {
    return (
        <StyledButton>
            {props.text}
        </StyledButton>
    );
}

export default Button;