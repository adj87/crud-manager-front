import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import Links from './Linkslist';
import { APPLICATION_NAME_MENU, APPLICATION_VERSION } from '../../constants/general';

const styles = theme => ({
    categoryHeader: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2)
    },
    categoryHeaderPrimary: {
        color: theme.palette.common.white
    },
    item: {
        paddingTop: 1,
        paddingBottom: 1,
        color: 'rgba(255, 255, 255, 0.7)',
        '&:hover,&:focus': {
            backgroundColor: 'rgba(255, 255, 255, 0.08)'
        }
    },
    itemCategory: {
        backgroundColor: '#232f3e',
        boxShadow: '0 -1px 0 #404854 inset',
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2)
    },
    firebase: {
        fontSize: 24,
        color: theme.palette.common.white
    },
    itemActiveItem: {
        color: '#4fc3f7'
    },
    itemPrimary: {
        fontSize: 'inherit'
    },
    itemIcon: {
        minWidth: 'auto',
        marginRight: theme.spacing(2)
    },
    divider: {
        marginTop: theme.spacing(2)
    }
});

function Navigator(props) {
    const { classes, ...other } = props;

    return (
        <Drawer variant="permanent" {...other}>
            <List disablePadding>
                <ListItem className={clsx(classes.firebase, classes.item, classes.itemCategory)}>{APPLICATION_NAME_MENU}</ListItem>
                <ListItem className={clsx(classes.item, classes.itemCategory)}>
                    <ListItemIcon className={classes.itemIcon}>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText
                        classes={{
                            primary: classes.itemPrimary
                        }}
                    >
                        {APPLICATION_VERSION}
                    </ListItemText>
                </ListItem>
                <Links />

                <Divider className={classes.divider} />
            </List>
        </Drawer>
    );
}

Navigator.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navigator);
