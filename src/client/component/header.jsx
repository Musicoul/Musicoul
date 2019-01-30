import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';



class  Header extends React.Component {
    constructor(props){
        super(props);

    }

    render(){
         return (
            <header className="font-sans" >

                <div className="w-full">
                    <div className="container">
                    <div className="h-2"></div>
                        <div className="row">

                            <div className=" three columns">
                                <h1 className="primary-color">LOGO</h1>
                            </div>
                            <div className=" seven columns nav-menu">
                                <div className="h-8"></div>
                                <div className="flex wrap">

                                    <div className=" sm:w-full md-w-1/5">
                                        <a href="#" className=" primary-color no-underline text-3xl">
                                            Menu
                                        </a>
                                    </div>
                                    <div className=" sm:w-full md-w-1/5">
                                        <a href="#" className=" primary-color no-underline text-3xl">
                                            Menu
                                        </a>
                                    </div>
                                    <div className=" sm:w-full md-w-1/5">
                                        <a href="#" className=" primary-color no-underline text-3xl">
                                            Menu
                                        </a>
                                    </div>
                                    <div className=" sm:w-full md-w-1/5">
                                        <a href="#" className=" primary-color no-underline text-3xl">
                                            Menu
                                        </a>
                                    </div>
                                    <div className=" sm:w-full md-w-1/5">
                                        <a href="#" className=" primary-color no-underline text-3xl">
                                            Menu
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="  two columns p-4 pt-8">
                                <div className="flex flex-wrap">
                                    <a className="w-1/3"><span className="ti-instagram primary-color text-5xl"></span></a>
                                    <a className="w-1/3"><span className="ti-facebook primary-color text-5xl"></span></a>
                                    <a className="w-1/3"><span className="ti-youtube primary-color text-5xl"></span></a>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                </header>

        );
    }

}



export default Header;