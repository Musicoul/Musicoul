import React  from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import {ImagePlaceHolder } from '../placeholder'
import { Placeholder } from 'semantic-ui-react'
import Typography from '@material-ui/core/Typography';
const styles = theme => ({
    avatar : {
        width: '150px',
        height: '150px',
    }
})

class ProfileHead extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { classes } = this.props;
        return (
            <div className="w-full">
                <Card>
                    <CardContent>
                        <div className="row">
                            <div className="three columns">
                                <Avatar className={classes.avatar}  >
                                    AS
                                </Avatar>
                            </div>
                            <div className="nine columns">
                                <div className="my-4">

                                    <Typography variant="h4" gutterBottom>
                                    Aniketh Saha
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

ProfileHead.propTypes = {};

export default withStyles(styles)(ProfileHead);
