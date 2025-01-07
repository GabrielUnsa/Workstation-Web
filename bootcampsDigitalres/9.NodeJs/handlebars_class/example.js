const Handlebars = require('handlebars');
const div = '<div>{{change_me}}</div>'
const template = Handlebars.compile(div)
console.log(template({ change_me: 'Generado por HandLebars' }));
console.log(template({ change_me: () => 'test' }));
