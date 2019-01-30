import React from 'react';
import PropTypes from 'prop-types';
import {RightSideBar} from './rightSideBar'
import {ProfileHead , ProfileMid} from './profileComponent'
class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div class="">

                <div className="nine columns px-4">
                    <ProfileHead />
                    <ProfileMid />

                </div>
                <div className="three columns ">
                    <RightSideBar />
                </div>
            </div>
        );
    }
}

Profile.propTypes = {};

export default Profile;
