// const express = require('express')
import * as express from 'express'
const bodyParser = require('body-parser')
const winston = require('winston')
var expressControllers = require('express-controller');
import * as mongoose from 'mongoose';
const cors = require('cors')
const helmet = require('helmet')
const {
  PORT,
  SECRET
} = require('../../configs')
const path = require('path')
var csrf = require('csurf');
var RateLimit = require('express-rate-limit')

const cookieParser = require('cookie-parser')
const session = require('express-session')
var expressValidator = require('express-validator');
const sanitizeBody = require('express-validator/filter');


const {
  dbname
} = require('../../configs')
//database connection
mongoose.connect(`mongodb://localhost/${dbname}`, {
  useNewUrlParser: true
});




// M
// Middlewares
const app = express();
app.use(helmet({
  frameguard: {
    action: 'deny'
  }
}));

app.use(cookieParser())
app.use(session({
  secret : SECRET,
  resave : true,
  saveUninitialized : true,
   signed: true,
  // store : true,


}))



// app.use(csrf());

// app.use(helmet.contentSecurityPolicy({
//     directives: {
//       defaultSrc: ["'self'"],
//       styleSrc: ["'self'", 'maxcdn.bootstrapcdn.com','https://fonts.googleapis.com','https://fonts.gstatic.com/']
//     }
//   }))
app.use(bodyParser.urlencoded({
  extended: true,
  limit: '50mb'
}))
app.use(bodyParser.json({
  limit: '50mb'
}))
app.use(cors());
app.use(expressValidator());
// use this middleware in authentications routes or post method routes
var authAPILimiter = new RateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 1000,
  delayMs: 0 // disabled
});
// loggin middleware
const logger = winston.createLogger({
  level: 'info',
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: '../logs/error.log',
      level: 'error'
    }),
    new winston.transports.File({
      filename: '../logs/debug.log',
      level: 'debug'
    }),
    new winston.transports.File({
      filename: '../logs/crit.log',
      level: 'crit'
    }),
    new winston.transports.File({
      filename: '../logs/warn.log',
      level: 'warn'
    }),
    new winston.transports.File({
      filename: '../logs/combined.log'
    })
  ]
});

// V

app.use(async function (req: express.Request, res: express.Response, next: express.NextFunction) {
  // var csrf = await req.csrfToken()
  // res.cookie('_csrf', csrf)
  res.locals._csrf = null
  next()
});




app.use(express.static(path.join(__dirname, '/public')))
app.set('views', path.join(__dirname, '/public/views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


// C

expressControllers.setDirectory(path.join(__dirname, '/controller')).bind(app);

// const { renderSSRcomponent } = require('./controller/ssr.js')
import {
  authRoute
} from './routes'









app.use('/auth', authRoute);
// app.get('/',renderSSRcomponent)
app.get('/', (req: express.Request, res: express.Response) => {
  res.render('index.ejs')
})












app.set('port', (process.env.PORT || PORT));
app.listen(app.get('port'), () => {
  logger.info('> Server is running on PORT ', app.get('port'));
})