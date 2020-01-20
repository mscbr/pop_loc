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
    font-size: 1.8em;
    padding: 10px;
    span {
        display: block;
        margin-top: 50%;
    }
`;
const Title = styled.div`
    flex-grow: 1;
    color: ${primary};
    span {
        color: ${accentFont};
    }
`;
// probably should abstract button element
const Request = styled.div`
    margin-left: auto;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    button {
        background: ${primary};
        color: ${secondary};
        padding: 10px;
        border-radius: 5px;
    }
    span {
        color: ${accentFont};
    }
`;
const ListItem = styled.li`
    margin: 2px;
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
        <ListItem>
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
                    <span>Spots:</span>
                    <span>
                        {requests?.filter(request => request.accepted).length} /{' '}
                        {capacity}
                    </span>
                    <button>Join!</button>
                </Request>
            </Card>
        </ListItem>
    );
};
export default EventItem;
