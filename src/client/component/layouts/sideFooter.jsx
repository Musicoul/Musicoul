import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
class SideFooter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="w-full my-2">
                <Card className="w-full-imp">
                        <ListSubheader>
                        <span className="w-full text-semibold text-2xl ">Links</span>


                        </ListSubheader>
                        <Divider/>
                        <List component="nav">
                            <ListItem
                                button
                                selected={this.state.selectedIndex === 2}
                                onClick={event => this.handleListItemClick(event, 2)}
                            >
                                <span className="w-full text-xl font-semibold">About Us</span>
                            </ListItem>
                            <ListItem
                                button
                                selected={this.state.selectedIndex === 3}
                                onClick={event => this.handleListItemClick(event, 3)}
                            >
                                <span className="w-full text-xl font-semibold">Privacy Policy</span>
                            </ListItem>
                            <ListItem
                                button
                                selected={this.state.selectedIndex === 3}
                                onClick={event => this.handleListItemClick(event, 3)}
                            >
                                <span className="w-full text-xl font-semibold">Agreement</span>
                            </ListItem>
                            <ListItem
                                button
                                selected={this.state.selectedIndex === 3}
                                onClick={event => this.handleListItemClick(event, 3)}
                            >
                                <span className="w-full text-md font-semibold">Contact Us</span>
                            </ListItem>
                            <ListSubheader>Follow Us On</ListSubheader>
                            <Divider/>
                            <ListItem>
                                <div className="flex flex-wrap w-full">
                                    <span className="flex-1 ti-instagram text-5xl"></span>
                                    <span className="flex-1 ti-facebook text-5xl"></span>
                                    <span className="flex-1 ti-youtube text-5xl"></span>
                                </div>
                            </ListItem>


                            </List>

                </Card>
            </div>
        );
    }
}

SideFooter.propTypes = {};

export default SideFooter;
