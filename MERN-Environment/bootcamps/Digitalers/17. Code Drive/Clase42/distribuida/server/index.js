const express = require('express');
const cors = require('cors');
const apiRouter = require('./routes/api');

const app = express();

app.set('port', process.env.PORT || 5000);

app.use(cors());
app.use('/api', apiRouter);

app.listen(app.get('port'),
    () => console.log(`Servidor ejecutándose en http://localhost:${app.get('port')}`)
);
