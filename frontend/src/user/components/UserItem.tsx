import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import './UserItem.css';
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    ListItem,
    Chip,
    Avatar
} from '@material-ui/core';

interface Props {
    username: string;
    image: string;
    events: {
        id: string;
        title: string;
    }[];
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        card: {
            display: 'flex',
            width: '100%',
            background: '#a113ff',
            color: 'white',
            opacity: 0.8
        },
        cover: {
            width: 120
        },
        chip: {
            height: 25,
            margin: 2
        }
    })
);

const UserItem: React.FC<Props> = props => {
    const classes = useStyles();
    const shortenEventTitle = (title: string) => {
        console.log(title);
        return title.length < 7 ? title : title.slice(0, 8) + `...`;
    };
    return (
        <ListItem>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.cover}
                    image={props.image}
                    title="User avatar"
                />
                <CardContent>
                    <Typography variant="subtitle2">
                        {props.username}
                    </Typography>
                    {props.events.map(event => (
                        <Chip
                            key={`event-chip-${props.username}-${event.id}`}
                            className={classes.chip}
                            label={shortenEventTitle(event.title)}
                            avatar={<Avatar>A</Avatar>}
                            onClick={() => console.log('click')}
                        />
                    ))}
                </CardContent>
            </Card>
        </ListItem>
    );
};

export default UserItem;
