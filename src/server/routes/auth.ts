import * as express from "express";
const router:express.Router = express.Router()

import { showLoginPage,login ,showRegisterPage,register} from '../controller/auth'



router.get('/login',showLoginPage);
router.get('/register',showRegisterPage)



router.post('/login',login)
router.post('/register',register)


export = router;
