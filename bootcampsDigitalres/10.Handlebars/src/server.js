const express = require('express');
const exphbs = require('express-handlebars');
const { log: logger } = require('console');

const app = express();

const PORT = 4000;

const main = async () => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.engine('.hbs', exphbs({
    extname: '.hbs',
    layoutsDir: 'src/views/layouts',
    partialsDir: 'src/views/partials',
    /* helpers: {
      pages: () => [
        { link: '/', name: 'home', active: true },
        { link: '/about', name: 'about', active: false },
      ], Not Wotking no sabemos porque se tiene que investigar
  }, */
  }));
  const pages = [{ link: '/', name: 'home', active: true }, { link: '/about', name: 'about', active: false }];
  app.set('view engine', '.hbs');
  app.set('views', 'src/views/');
  app.get('/', (req, res) => res.render('home', {
    pagName: 'Home',
    pages,
  }));//  , { layout: false }));
  app.get('/about', (req, res) => res.render('about', {
    pagName: 'About',
    pages,
  }));
  app.listen(PORT, () => {
    logger(`Listening on http://localhost:${PORT}`);
  });
};
main();
