const express = require('express');
const { engine: exphbs } = require('express-handlebars');
const {log: logger} = require('console');

const app = express();
const PORT = 4000;
const pages = [
  {link: '/', name: 'Home', active: true},
  {link: '/about', name: 'About', active: false},
];

const main = async () => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.engine('.hbs', exphbs({ 
    extname: '.hbs', 
    layoutsDir: 'src/views/layouts', 
    partialsDir: 'src/views/partials',
  }));

  app.set('view engine', '.hbs');
  app.set('views', 'src/views/');

//  app.get('/', (req, res) => res.render('home', {layout: false}));
//  app.get('/about', (req, res) => res.render('about', {layout: false}));
  app.get('/', (req, res) => res.render('home', {
    pageName: 'Home',
    pages: pages,
  }));
  app.get('/about', (req, res) => res.render('about', {
    pageName: 'About',
    pages: pages,
  }));


  app.listen(PORT, () => {
    logger(`Listening on http://localhost: ${PORT}`);
  });
}

main();
