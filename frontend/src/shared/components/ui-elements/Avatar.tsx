import React from 'react';
import styled from 'styled-components';

interface Props {
    image: string;
    alt: string;
    style?: {
        width: number;
        height: number;
    };
}

const StyledAvatar = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        display: block;
        border-radius: 50%;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const Avatar: React.FC<Props> = props => {
    return (
        <div>
            <img
                src={props.image}
                alt={props.alt}
                style={{
                    width: props.style?.width,
                    height: props.style?.height
                }}
            />
        </div>
    );
};

export default Avatar;
