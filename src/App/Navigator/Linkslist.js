import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { ChevronRight } from '@material-ui/icons';
import { withStyles } from '@material-ui/styles';
import clsx from 'clsx';
import { linkItems } from '../../constants/links';

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

const LinksMenu = props => {
    const { location, classes } = props;
    return linkItems.dashboard.map(({ id, children }, i) => (
        <>
            <ListItem className={classes.categoryHeader} key={`list-item-category-${i}`}>
                <ListItemText
                    key={`list-item-category-text-${i}`}
                    classes={{
                        primary: classes.categoryHeaderPrimary
                    }}
                >
                    {id}
                </ListItemText>
            </ListItem>
            {children.map((link, index) => {
                const active = link.route === location.pathname;

                return (
                    <Link key={`link-${index}`} to={link.route} style={{ textDecoration: 'none' }}>
                        <ListItem button key={index} className={clsx(classes.item, active && classes.itemActiveItem)}>
                            <ListItemIcon className={classes.itemIcon}>{link.icon}</ListItemIcon>
                            <ListItemText
                                classes={{
                                    primary: classes.itemPrimary
                                }}
                            >
                                {link.textIcon}
                            </ListItemText>
                            {location.pathname === link.route && <ChevronRight />}
                        </ListItem>
                    </Link>
                );
            })}
        </>
    ));
};

export default withStyles(styles)(withRouter(LinksMenu));
