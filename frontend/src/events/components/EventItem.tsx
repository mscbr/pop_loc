import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { primary, secondary, accentFont } from '../../shared/Styles';

import Card from '../../shared/components/ui-elements/Card';

import { display24time } from '../../helpers/date';

export interface Props {
    id: string;
    title: string;
    description: string;
    activity: string;
    image: string;
    address: string;
    location: {
        lat: number;
        lng: number;
    };
    date: {
        from: Date;
        to?: Date;
    };
    price?: number;
    requests?: {
        user: string;
        pending: boolean;
        accepted: boolean;
    }[];
    capacity: number;
    tags?: string[];
    createdBy: {
        id: string;
        username: string;
    };
    createdAt: Date;
}

const Hour = styled.div`
    color: ${accentFont};
    font-size: 2em;
    span {
        display: block;
        margin-top: 50%;
    }
`;
const Title = styled.div`
    color: ${primary};
    span {
        color: ${accentFont};
    }
`;
// probably should abstract button element
const Request = styled.div`
    button {
        background: ${primary};
        color: ${secondary};
        padding: 10px;
        border-radius: 5px;
    }
`;

const EventItem: React.FC<Props> = props => {
    const {
        id,
        title,
        description,
        activity,
        image,
        address,
        location,
        date,
        price,
        requests,
        capacity,
        tags,
        createdBy,
        createdAt
    } = props;

    return (
        <li>
            <Card horizontal>
                <Hour>
                    <span>{display24time(date.from)}</span>
                </Hour>
                <Title>
                    <Link to={`/`}>
                        <h2>{title}</h2>
                    </Link>
                    <span>{activity}</span>
                    <Link to={`/`}>
                        <p>{createdBy.username}</p>
                    </Link>
                </Title>
                <Request>
                    <span>Available spots:</span>
                    <br />
                    <span>
                        {requests?.filter(request => request.accepted).length} /{' '}
                        {capacity}
                    </span>
                    <button>Join!</button>
                </Request>
            </Card>
        </li>
    );
};
export default EventItem;
