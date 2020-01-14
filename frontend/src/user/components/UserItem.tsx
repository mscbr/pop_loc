import React from 'react';
import {
    Theme,
    createStyles,
    makeStyles,
    useTheme
} from '@material-ui/core/styles';
import './UserItem.css';
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    ListItem
} from '@material-ui/core';

interface Props {
    username: string;
    image: string;
    events: string[];
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        card: {
            display: 'flex',
            width: '100%',
            background: '#ff13e7',
            color: '#2b13ff',
            opacity: 0.8
        },
        cover: {
            width: 150
        }
    })
);

const UserItem: React.FC<Props> = props => {
    const classes = useStyles();
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
                </CardContent>
            </Card>
        </ListItem>
    );
};

export default UserItem;
