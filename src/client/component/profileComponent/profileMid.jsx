import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Card from '@material-ui/core/Card';
import Tab from '@material-ui/core/Tab';

class ProfileMid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value : 0
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event, value){
        console.log('value :', value);
        this.setState({ value });
      };

    render() {
        const { value } = this.state;

        return (
            <div className="w-full my-2">
            <Card>
              <Tabs value={value} onChange={this.handleChange}>
                <Tab label="Item One" />
                <Tab label="Item Two" />
                <Tab label="Item Three" />
              </Tabs>
            </Card>
            {value === 0 && <h1>Item One</h1>}
            {value === 1 && <h1>Item Two</h1>}
            {value === 2 && <h1>Item Three</h1>}
          </div>
        );
    }
}

ProfileMid.propTypes = {};

export default ProfileMid;
