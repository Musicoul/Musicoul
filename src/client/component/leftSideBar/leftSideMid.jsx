import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Paper from '@material-ui/core/Paper';
class LeftSideMid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
        <div className="w-full">
            <List>
                <Paper className="mb-2" elevation={1}>
                     <ListItem>
                        <Avatar>
                        <ImageIcon />
                        </Avatar>
                        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                    </ListItem>
                </Paper>

           <Paper className="mb-2" elevation={1}>
                    <ListItem>
                    <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                </ListItem>
            </Paper>
            <Paper className="mb-2" elevation={1}>
                     <ListItem>

                        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                    </ListItem>
                </Paper>
            </List>
        </div>
        );
    }
}

LeftSideMid.propTypes = {};

export default LeftSideMid;
