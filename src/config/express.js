import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import helmet from 'helmet';
import router from '../routes';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(helmet());
app.use(cors());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Authorization, Origin, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

router(app);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers
// will print stacktrace
app.use((err, req, res, next) => res.status(err.code || 500)
    .json({
        data: err.data,
        message: err.message,
        code: err.code
    }));

export default app;