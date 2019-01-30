import * as express from 'express';
import {User} from '../../model/user'


export const  showLoginPage = (req : express.Request ,res: express.Response):void =>{

        res.render('Login.ejs');


    }
export const login = (req : express.Request ,res: express.Response):void => {
    const {username: string,password:string} = req.body;
    console.log('username , password', username , password)
}