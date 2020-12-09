import { app, config } from './config';

const port = config.PORT || 3000;

app.listen(port, () => {
    console.log(`Application listen on port ${port}`);
});