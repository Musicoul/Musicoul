import * as express from 'express';
import {
    User
} from '../../model/user'



export const showRegisterPage = (req: express.Request, res: express.Response): void => {
    res.render('register.ejs');
}
export const register = (req: express.Request, res: express.Response): void => {

    req.checkBody('email').trim();
    req.checkBody('password').escape();
    req.checkBody('mobile').trim();
    req.checkBody('mobile').escape();
    req.checkBody('password_confirmation').trim();
    req.checkBody('password_confirmation').escape();
    req.checkBody('name').trim();
    req.checkBody('name').escape();

    req.sanitizeBody('email');
    req.sanitizeBody('password');
    req.sanitizeBody('password_confirmation');
    req.sanitizeBody('name');
    req.sanitizeBody('mobile');
    console.log('req.body :', req.body);
    req.checkBody('mobile','enter the mobile correctly').notEmpty();
    req.checkBody('email','enter the email correctly').isEmail();
    req.checkBody('password_confirmation',"enter the password correctly").notEmpty();
    req.checkBody('name',"please enter correct name").isString().notEmpty();
    req.checkBody('password','enter the password correctly').notEmpty();
    const {
        username: string,
        pass: string,
        email : string,
        name : string,
        repeatPass : string
    } = req.body;
    console.log('req.body',req.body)
}