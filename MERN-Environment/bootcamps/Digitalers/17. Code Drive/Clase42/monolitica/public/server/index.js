const express = require('express');
const path = require('path');
const apiRouter = require('./routes/api');
const fs = require('fs');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use((req, res, next) => {
    console.log(req.url);

    if(req.url === "/")
    {
        res.sendFile(path.join(__dirname, 'public', 'index.html'));
    }
    else if(fs.existsSync(`public/${req.url}`))
    {
        const segs = `public/${req.url}`.split('/');
        res.sendFile(path.join(__dirname, ...segs));
    }
    else if(req.url.startsWith('/api'))
    {
        next();
    }
    else
    {
        res.sendFile(path.join(__dirname, 'public', 'index.html'));
    }

});

app.use('/api', apiRouter);


app.listen(app.get('port'),
    () => console.log(`Servidor ejecutándose en http://localhost:${app.get('port')}`)
);