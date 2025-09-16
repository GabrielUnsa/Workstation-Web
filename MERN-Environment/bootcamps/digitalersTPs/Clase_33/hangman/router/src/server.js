require('dotenv-flow').config();
const express = require('express');
const cors = require('cors');
const { info: logger, error: errorLogger } = require('console');
const fetch = require('node-fetch');

//const serviceAuthMdw = require(./middlewares/auth/service);

const { NODE_ENV, PORT } = process.env;

const main = async() => {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  if(NODE_ENV === 'local') app.use(cors());
  //app.use(serviceAuthMdw);
  
  app.all('/api/*', async (req, res) => {
    const serviceName = req.url.replace('/api/', '').split(/\/\|\?/)[0].toUpperCase();
    const baseServiceUrl = process.env[`${serviceName}_SERVICE_URL`];
    const requestMethod = req.method.toUpperCase();

    try {
      const response = await fetch(
        `${baseServiceUrl}${req.url}`,
        {
          method: requestMethod,
          headers: {
            'Content-Type': req.headers['content-type'],
            ...req.headers.Authentication && { Authentication: req.headers.Authentication },
          },
          ...!['GET', 'HEAD'].include(requestMethod) && req.body && {body: JSON.stringify(req.body)},
          },
      );
      const responseJson = await response.text();
      return res.status(response.status).json({ message: responseJson });
    } catch (e) {
      errorLogger(e);
      return res.status(500).json({ message: 'Request Failed' });
    }
  });
  
  //eslint-disable-next-line no-unused-vars
  
  app.use((err,req, res, next) => {
    if( err === 'Could not authenticate the current service'){
      return res.status(401).json({ message: err });
    }
    return res.status(500).json({ message: err });
  });

  app.listen(PORT, () => {
    logger(`Rotuer is running onlocalhost: ${PORT}`);
  });
};

main();
