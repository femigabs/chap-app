import { app } from './config';

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Application listen on port ${port}`);
});