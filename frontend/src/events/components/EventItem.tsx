import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { accentFont } from '../../shared/Styles';

import Card from '../../shared/components/ui-elements/Card';

export interface Props {
    title: string;
    description: string;
    image: string;
    address: string;
    location: {
        lat: number;
        lng: number;
    };
    date: {
        from: string;
        to?: string;
    };
    price?: number;
    requests?: {
        user: string;
        pending: boolean;
        accepted: boolean;
    }[];
    tags?: string[];
    createdBy: string;
    createdAt: string;
}

const Hour = styled.div`
    color: ${accentFont};
    font-size: ;
`;

const EventItem: React.FC<Props> = props => {
    return (
        <li>
            <Link to={'/'}>
                <Card horizontal>
                    <div>
                        <span></span>
                    </div>
                </Card>
            </Link>
        </li>
    );
};
